import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'story-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements AfterViewInit {
  @Input() message: string | undefined;
  @Input() popUpTitle: string | undefined;
  @Input() showYesButon: boolean | undefined;
  @Input() showNoButon: boolean | undefined;
  @ViewChild('openModal') openModal: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.openModal?.nativeElement.click();
  }
}
