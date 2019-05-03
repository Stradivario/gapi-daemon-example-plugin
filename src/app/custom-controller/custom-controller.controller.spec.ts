import 'jest';
import { map } from 'rxjs/operators';
import {
  Container,
  sendRequest,
  createTestBed,
  HapiModule,
  GraphQLModule,
  HAPI_SERVER,
  setConfigServer,
  setConfigGraphql
} from '@gapi/core';
import { Server } from 'hapi';
import { from } from 'rxjs';
import { CustomControllerController } from './custom-controller.controller';

describe('CustomController Controller', () => {
  let server: Server;
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      controllers: [CustomControllerController]
    }, [
        HapiModule.forRoot(setConfigServer()),
        GraphQLModule.forRoot(setConfigGraphql())
      ])
      .toPromise();
      server = Container.get<Server>(HAPI_SERVER);
  });

  afterAll(async () => await Container.get<Server>(HAPI_SERVER).stop());

  it('e2e: queries => (initQuery) : Should sucessfully ....', async done => {
    from(sendRequest<any>({
      query: `
        query initQuery {
          initQuery {
            init
          }
        }
    `,
      variables: {},
      signiture: {
        token: ''
      }
    })).pipe(
      map(res => {
        expect(res.success).toBeTruthy();
        return res.data.initQuery;
      }),
    )
      .subscribe(async res => {
        expect(res.init).toBeFalsy();
        done();
      }, err => {
        console.error(err);
        expect(err).toBe(null);
        done();
      });
  });
});
