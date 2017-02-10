import { Component, Input } from '@angular/core';

@Component({
    selector: 'alchimist-brewer',
    template: require('./brewer.component.html'),
    styleUrls:  ['app/brewer/brewer.component.css']
})
export class BrewerComponent {
  @Input() mode: string;
  receivedData: Array<any> = [];

  constructor() {}

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
    console.log($event.dragData);
  }
}
