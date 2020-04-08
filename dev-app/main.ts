import {Aurelia} from 'aurelia-framework';
import {GlobalValidationConfiguration, validateTrigger} from "aurelia-validation";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('resources')
    .plugin('aurelia-validation', (config: GlobalValidationConfiguration) => config.defaultValidationTrigger(validateTrigger.blur))
    .plugin('au-table');

  aurelia.use.developmentLogging('warn');

  aurelia.start().then(() => aurelia.setRoot('app'));
}
