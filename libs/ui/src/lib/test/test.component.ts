import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'story-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() label='click me'
  @Input() color='#ff00ff'
  constructor() { }

  ngOnInit(): void {
  }

}
