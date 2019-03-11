import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ModalDynamicComponent} from './modal-dynamic/modal-dynamic.component';
import {ModalRefService} from './modal-ref.service';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    modalRef: ModalRefService;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private appRef: ApplicationRef) {
    }

    create(modalImplementedComponent, context = {}): ModalRefService {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(ModalDynamicComponent)
            .create(this.injector);

        this.modalRef = componentRef.instance.mount(modalImplementedComponent, context);
        this.modalRef.appRef = this.appRef;
        this.modalRef.componentRef = componentRef;

        this.appRef.attachView(componentRef.hostView);

        const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        document.body.appendChild(domElement);

        return this.modalRef;
    }

    open() {
        this.modalRef.show();
    }
}
