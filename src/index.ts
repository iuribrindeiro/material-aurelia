import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

import './base-material-dashboard/js/bootstrap-material-design.min.js';
import './base-material-dashboard/styles/material-dashboard.css';
import './base-material-dashboard/js/material-dashboard.js';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    //ATTRIBUTES
    PLATFORM.moduleName('./attributes/rippler/rippler'),
    PLATFORM.moduleName('./attributes/extending-binds/extending-binds'),
    PLATFORM.moduleName('./attributes/mt-card-title/mt-card-title'),
    PLATFORM.moduleName('./attributes/mt-table/mt-table'),

    //ELEMENTS

    //ELEMENTS - TEMPLATE
    //ELEMENTS - TEMPLATE - MT-CONTAINER
    PLATFORM.moduleName('./elements/template/mt-container/mt-container'),
    //ELEMENTS - TEMPLATE - MT-CONTAINER-FLUID
    PLATFORM.moduleName('./elements/template/mt-container-fluid/mt-container-fluid'),
    //ELEMENTS - TEMPLATE - MT-CONTENT
    PLATFORM.moduleName('./elements/template/mt-content/mt-content'),
    //ELEMENTS - TEMPLATE - MT-WRAPPER
    PLATFORM.moduleName('./elements/template/mt-wrapper/mt-wrapper'),
    //ELEMENTS - TEMPLATE - MT-MAIN-PANEL
    PLATFORM.moduleName('./elements/template/mt-main-panel/mt-main-panel'),

    
    //ELEMENTS - MT-NAVBAR
    PLATFORM.moduleName('./elements/mt-navbar/mt-navbar'),
    //ELEMENTS - MT-BUTTON
    PLATFORM.moduleName('./elements/mt-button/mt-button'),
    //ELEMENTS - MT-PAGINATION
    PLATFORM.moduleName('./elements/mt-pagination/mt-pagination'),

    //ELEMENTS - MT-SIDEBAR
    PLATFORM.moduleName('./elements/mt-sidebar/mt-sidebar'),
    PLATFORM.moduleName('./elements/mt-sidebar/mt-sidebar-item-link/mt-sidebar-item-link'),
    PLATFORM.moduleName('./elements/mt-sidebar/mt-sidebar-item-collapse/mt-sidebar-item-collapse-link/mt-sidebar-item-collapse-link'),
    PLATFORM.moduleName('./elements/mt-sidebar/mt-sidebar-item-collapse/mt-sidebar-item-collapse'),

    //ELEMENTS - FORMS
    PLATFORM.moduleName('./elements/forms/mt-input/mt-input'),
    PLATFORM.moduleName('./elements/forms/mt-checkbox/mt-checkbox'),

    //ELEMENTS - MT-CARD
    PLATFORM.moduleName('./elements/mt-card/mt-card'),
    PLATFORM.moduleName('./elements/mt-card/mt-card-body/mt-card-body'),
    PLATFORM.moduleName('./elements/mt-card/mt-card-header/mt-card-header'),
    PLATFORM.moduleName('./elements/mt-card/mt-card-footer/mt-card-footer'),


    //ELEMENTS - MT-TABLE
    PLATFORM.moduleName('./elements/mt-table/mt-table-container'),
    PLATFORM.moduleName('./elements/mt-table/mt-table-column/mt-table-column')
  ]);
}

export { TableState, ValueChanged, OrderingColumn } from 'elements/mt-table/mt-table-container.js';
export {CustomValidationControllerFactory} from './services/validation-controller-factory';
export { PageSize } from './elements/mt-table/mt-table-container';
export { Order } from './elements/mt-table/mt-table-column/mt-table-column.js';
