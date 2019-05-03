import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

if (process.env.START_PLUGIN) {
    Bootstrap(AppModule).subscribe(() => console.log('Plugin started'), console.error.bind(console));
}


export * from './app/app.module'