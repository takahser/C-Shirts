import {Component} from 'angular2/core';
import {TShirt} from './tshirt';

@Component({
  selector: 'my-tshirt-detail',
  template: `
    <div>
        <h2>{{tshirt.title}} details!</h2>
        <div><label>id: </label>{{tshirt.id}}</div>
        <div>
            <label>title: </label>
            <div><input [(ngModel)]="tshirt.title" placeholder="title"></div>
        </div>
        <div>
            <label>print technique: </label>
            <div><input [(ngModel)]="tshirt.printTechnique" placeholder="printTechnique"></div>
        </div>
    </div>
  `,
  inputs: ['tshirt']
})
export class TShirtDetailComponent {
    tshirt: TShirt;
}