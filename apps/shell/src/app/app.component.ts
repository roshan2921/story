import { Component } from '@angular/core';

@Component({
  selector: 'story-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  buttonName:string='Hii';
  second:string='second';
  labels=[
    'first',
    'second',
    'third'
  ]
  // properties={
  //   labelss:[
  //     'first',
  //   'second',
  //   'third'
  //   ],
  //   colors:[
  //     'red',
  //     'green'
  //   ]
  // }
}
