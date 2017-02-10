import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
  public alchimistDesk: string = 'Apprentice! Practise to make some great potions!';
  public alchimistRecipes: string = "Apprentice!! Don't you remember what I told you !?";
  public alchimistJoke: string = 'Apprentice!!! What the ... Oh hum, nothing ^^';
}
