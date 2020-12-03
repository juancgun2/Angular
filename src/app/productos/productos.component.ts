import { Component, OnInit } from '@angular/core';
import { ProductoCarritoService } from '../producto-carrito.service';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit { 
  inputValue:number;

  
  constructor(private pcService:ProductoCarritoService) { }

  ngOnInit(): void {
  }

  addToCart(producto:Producto):void { 
    this.pcService.addToCart(producto);
    producto.stock -= producto.cantidadCompra;
    producto.cantidadCompra = 1; 
  }

  productos: Producto[] = [ 
    { 
      nombre: 'televisor', 
      precio: 13000, 
      categoria: 'televisores',
      stock: 3, 
      cantidadCompra: 1,
      image: './assets/img/nootebook.jpg'
    },
    { 
      nombre: 'mouse', 
      precio: 2000, 
      categoria: 'computacion',
      stock: 5,
      cantidadCompra: 1,
      image: './assets/img/tv32.jpg'
    },
    { 
      nombre: 'teclado', 
      precio: 1500, 
      categoria: 'computacion',
      stock: 5,
      cantidadCompra: 1,
      image: './assets/img/mermelada.png'
    },
  ]
}
