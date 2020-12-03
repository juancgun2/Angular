import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './productos/producto';


@Injectable({
  providedIn: 'root'
})

export class ProductoCarritoService { 
  private _compras : Producto[] = [];
  compras : BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private _display : boolean = true;
  display : BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  addToCart(prod: Producto) {
    let item:Producto = this._compras.find((producto) => producto.nombre == prod.nombre);
      if(!item)  {
        let aux:Producto = prod;
        aux.precio = aux.precio * aux.cantidadCompra;
        this._compras.push( {... aux});
      }else { 
        item.cantidadCompra += prod.cantidadCompra;
        item.precio = prod.precio * item.cantidadCompra;
      }  
      this.setDisplay();
      this.compras.next(this._compras);
  }

  setDisplay() { 
    if(this._display == true)
      this._display = !this._display;
      this.display.next(this._display);
  }
}
