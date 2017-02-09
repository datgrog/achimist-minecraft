import {Component, Input} from '@angular/core';

@Component({
  selector: 'alchimist-title',
  template: require('./title.html')
})
export class TitleComponent {
  @Input() title: string;
}
