import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../newrecipe/newrecipe';

@Component({
  selector: 'cook-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  @Input() recipe: Recipe | undefined;

  @Output() subscribe = new EventEmitter();

}
