import {Component} from 'angular2/core';

interface TShirt {
    id: number;
    title: string;
    printTechnique: string;
}

// creating a visual component 'AppComponent'
@Component({
    selector: 'my-app', // CSS selector for a host HTML element named my-app
    template:`
        <h1>{{title}}</h1>
        <h2>My T-Shirts</h2>
        <ul class="heroes">
            <li *ngFor="#tshirt of tshirts"
            [class.selected]="tshirt === selectedTShirt"
            (click)="onSelect(tshirt)">
                <span class="badge">{{tshirt.id}}</span> {{tshirt.title}}
            </li>
        </ul>
        <div *ngIf="selectedTShirt">
            <h2>{{selectedTShirt.title}} details!</h2>
            <div><label>id: </label>{{selectedTShirt.id}}</div>
            <div>
                <label>title: </label>
                <div><input [(ngModel)]="selectedTShirt.title" placeholder="name"></div>
            </div>
            <div>
                <label>print technique: </label>
                <div><input value="{{selectedTShirt.printTechnique}}" placeholder="printTechnique"></div>
            </div>
        </div>
        `,
    styles:[`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
        `]
})
export class AppComponent {
    title = 'Custom T-Shirts';
    tshirts:  TShirt[] = [
        {"id": 1, "title": "tell your story", "printTechnique": "Screening"},
        {"id": 2, "title": "ZRK", "printTechnique": "Sublimation"},
        {"id": 3, "title": "IAZ", "printTechnique": "DOG Print"},
        {"id": 4, "title": "Zara black", "printTechnique": "Screening"}
    ];
    selectedTShirt: TShirt;
    
    onSelect(tshirt: TShirt) { this.selectedTShirt = tshirt; }
}