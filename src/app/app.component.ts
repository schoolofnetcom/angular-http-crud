import {Component, OnInit} from '@angular/core';
import {NotifyMessageService} from './services/notify-message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    constructor(private notifyMessage: NotifyMessageService) {

    }

    ngOnInit() {
        // this.notifyMessage.success('titulo', 'texto');
        // this.notifyMessage.error('titulo', 'texto');
    }


}
