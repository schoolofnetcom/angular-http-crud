import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appGetViewContainer]'
})
export class GetViewContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
