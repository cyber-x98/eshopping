import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fiY5zA_ofH0p06IrgTz30lQ8MdaiDbmsLQ&s',
      name: 'Air Gun',
      price: '300',
      stock: '3'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruL_adf_kfR2OUT2laFFRSc3CIMglSPqWTg&s',
      name: 'Mouse',
      price: '410',
      stock: '9'
    },
    {
      image: 'https://m.media-amazon.com/images/I/41rcVdtmKAL._SX300_SY300_QL70_FMwebp_.jpg',
      name: 'Keyboard',
      price: '600',
      stock: '7'
    }
  ]
}
