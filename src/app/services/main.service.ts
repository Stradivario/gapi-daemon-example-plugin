import { Service } from '@gapi/core';
import { of } from 'rxjs';
import { homedir } from 'os';

@Service()
export class MainService {
    constructor(

    ) {
        console.log('VUTRE SUM V MODULE')
        console.log(of, homedir);
    }
    async register() {
        console.log('AAA');
    }
}