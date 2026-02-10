import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

type Product = { id: number; title: string; description: string; price: number; stock: number };
type ResponseApiType = { products: Product[] };

@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  httpClient = inject(HttpClient);

  products: WritableSignal<Product[]> = signal([]);

  ngOnInit() {
    this.httpClient
      .get<ResponseApiType>('https://dummyjson.com/products')
      .subscribe((resultat) => this.products.set(resultat.products));
  }
}
