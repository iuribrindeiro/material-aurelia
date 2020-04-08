import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Material Aurelia';
    config.options.pushState = true;
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './pages/home/home', title: 'Home' },
      { route: 'componentes', name: 'componentes', moduleId: './pages/componentes/componentes', title: 'Componentes' },
      { route: 'forms', name: 'forms', moduleId: './pages/forms/forms', title: 'Forms' },
      { route: 'tables', name: 'tables', moduleId: './pages/tables/tables', title: 'Tables' }
    ]);

    this.router = router;
  }
}
