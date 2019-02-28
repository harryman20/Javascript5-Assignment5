import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
    @Input() stuff: Content;
    @Input() index: number;
    @Input() last: boolean;
    @Input() type: string;

    constructor() {
    }

    clicked() {
        console.log(this.stuff.contentId);
    }

    ngOnInit() {
    }

}
