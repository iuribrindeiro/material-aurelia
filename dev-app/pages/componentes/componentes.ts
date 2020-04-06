import { containerless } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from "aurelia-router";

@containerless
export class Componentes {

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: [''], redirect: 'buttons' },
      { route: ['buttons'], name: 'buttons', moduleId: PLATFORM.moduleName('./buttons/buttons'), title: 'Buttons' },
    ]);
  }
}
