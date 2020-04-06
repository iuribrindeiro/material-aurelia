import { PLATFORM } from 'aurelia-pal';
import { containerless } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@containerless
export class Componentes {

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: [''], redirect: 'extended-tables' },
      { route: ['extended-tables'], name: 'extended-tables', moduleId: PLATFORM.moduleName('./extended-tables/extended-tables'), title: 'Extended Tables' },
    ]);
  }
}
