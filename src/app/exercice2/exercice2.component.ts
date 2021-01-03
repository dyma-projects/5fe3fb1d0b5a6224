import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('input') public el: ElementRef; 

  public updateInput(): void {
    this.valeur = this.el.nativeElement.value;
  }
  constructor() { }

  ngOnInit() {
  }


}
