import { Component, OnInit, Input } from '@angular/core';
import {Pack} from '../../commons/interfaces/pack';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.pug',
  styleUrls: ['./pack.component.styl']
})
export class PackComponent implements OnInit {

  constructor() { }

  @Input() pack: Pack;

  ngOnInit() {
  }

}
