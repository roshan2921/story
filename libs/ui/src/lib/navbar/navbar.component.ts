import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'story-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Input() label: any='Button!';
  @Input() disabled=false;
  @Input() backgroundColor='#FF00FF';
  @Input() tableColor='#FF00FF';
  @Input() navColor='#FF00FF';
  @Input() description='test desc';


  ngOnInit(): void {
  }

}
