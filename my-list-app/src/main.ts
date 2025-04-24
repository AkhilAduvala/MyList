import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//appConfig already has provideRouter(routes) in the provider
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
