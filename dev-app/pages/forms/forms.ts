import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from "aurelia-router";

export class Forms {
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.map([
      { route: [''], redirect: 'validation-forms' },
      { route: 'validation-forms', name: 'validation-forms', moduleId: PLATFORM.moduleName('./validation-forms/validation-forms'), title:'Validation Forms' }
    ]);
  }
}
