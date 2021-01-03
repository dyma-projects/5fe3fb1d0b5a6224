import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result: number;
  @Output() changeResult = new EventEmitter();

  constructor() { }

  increment(): void {
    this.result++;
    this.changeResult.emit({
      value: this.result
    });
  }

  decrement(): void {
    this.result--;
    this.changeResult.emit({
      value: this.result
    });
  }

  ngOnInit() {
    this.result=0;
  }

}
