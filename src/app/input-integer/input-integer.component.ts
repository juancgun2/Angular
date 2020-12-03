import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit { 
  @Input() cantidad:number;
  @Input() max:number;
  @Output() cantidadChange:EventEmitter<number> = new EventEmitter<number> ();

  constructor() { }

  ngOnInit(): void {
  }

  restarCantidad():void { 
    if(this.cantidad > 1){ 
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  sumarCantidad():void {
    if(this.max > this.cantidad) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  } 

  controlarInput(event):void { 
    if(event.key > 0 && event.key <= 9){
      if(this.cantidad > this.max){
        this.cantidad = this.max;
      }
    }else {
      this.cantidad=1;
    }
  }

}
