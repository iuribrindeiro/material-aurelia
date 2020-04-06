import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import {GlobalValidationConfiguration, validateTrigger} from "aurelia-validation";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('resources'))
    .plugin(PLATFORM.moduleName('aurelia-validation'), (config: GlobalValidationConfiguration) => config.defaultValidationTrigger(validateTrigger.blur))
    .plugin(PLATFORM.moduleName('au-table'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
