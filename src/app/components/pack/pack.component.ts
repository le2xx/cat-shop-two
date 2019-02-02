import { Component, OnInit, Input} from '@angular/core';
import {Pack} from '../../commons/interfaces/pack';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.pug',
  styleUrls: ['./pack.component.styl']
})
export class PackComponent implements OnInit {

  constructor() {
  }

  @Input() pack: Pack;
  flagMouseOver = false;
  checkedPack = false;

  ngOnInit() {
  }

  mouseOut() {
    if (this.pack.available) {
      this.flagMouseOver = true;
    }
  }

  mouseOver() {
    if (this.pack.available) {
      this.flagMouseOver = false;
    }
  }

  mouseChecked() {
    if (this.pack.available) {
      this.checkedPack = !this.checkedPack;
    }
  }
}
