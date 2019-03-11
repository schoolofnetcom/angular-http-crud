import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'alert-success', //kebab
    template: `
        <div class="alert alert-success" role="alert">
            <ng-content></ng-content>
        </div>
    `
})
export class AlertSuccessComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

//app  app-nome
//admin admin-nome