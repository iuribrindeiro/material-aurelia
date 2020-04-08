import { PLATFORM } from 'aurelia-pal';
import {Aurelia} from 'aurelia-framework';
import {GlobalValidationConfiguration, validateTrigger} from "aurelia-validation";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('material-aurelia'))
    .plugin(PLATFORM.moduleName('aurelia-validation'), (config: GlobalValidationConfiguration) => config.defaultValidationTrigger(validateTrigger.blur))
    .plugin(PLATFORM.moduleName('au-table'));

  aurelia.use.developmentLogging('warn');

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
