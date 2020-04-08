import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Material Aurelia';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./pages/home/home'), title: 'Home' },
      { route: 'componentes', name: 'componentes', moduleId: PLATFORM.moduleName('./pages/componentes/componentes'), title: 'Componentes' },
      { route: 'forms', name: 'forms', moduleId: PLATFORM.moduleName('./pages/forms/forms'), title: 'Forms' },
      { route: 'tables', name: 'tables', moduleId: PLATFORM.moduleName('./pages/tables/tables'), title: 'Tables' }
    ]);

    this.router = router;
  }
}
