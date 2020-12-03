import { Component, OnInit } from '@angular/core';
import { ProductoCarritoService } from '../producto-carrito.service';
import { Producto } from '../productos/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit { 
  compras : Producto[];
  displayCompras: boolean = true;

  constructor(private pcService:ProductoCarritoService) { 
    pcService.compras.subscribe( c => this.compras = c);
    pcService.display.subscribe( d => this.displayCompras = d);
  }

  ngOnInit(): void {
  }

  hiden() { 
    this.displayCompras = true;
  }

}
