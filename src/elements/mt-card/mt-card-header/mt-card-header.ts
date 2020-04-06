import { containerless, bindable } from 'aurelia-framework';
import { Colors } from '../../base-material-element/colors';

@containerless
export class MtCardHeader {
  
  @bindable
  public color: Colors;

  @bindable
  public icon: string;
}
