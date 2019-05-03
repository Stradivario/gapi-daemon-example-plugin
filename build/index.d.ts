declare module '@gapi/example-plugin/app/services/main.service' {
	export class MainService {
	    constructor();
	    register(): Promise<void>;
	}

}
declare module '@gapi/example-plugin/app/custom-controller/custom-controller.controller' {
	import { GraphQLObjectType } from '@gapi/core';
	export const CustomControllerType: GraphQLObjectType<any, any, {
	    [key: string]: any;
	}>;
	export class CustomControllerController {
	    initQuery(): {};
	}

}
declare module '@gapi/example-plugin/app/app.module' {
	export class AppModule {
	}

}
declare module '@gapi/example-plugin/main' {
	export * from '@gapi/example-plugin/app/app.module';

}
