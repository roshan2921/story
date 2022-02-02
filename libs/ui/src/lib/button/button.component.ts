import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'story-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: any='submit';
  @Input() backgroundColor='#FF00FF';
  @Input() onClick='clicked'
  constructor() { }

  ngOnInit(): void {

  }

}
