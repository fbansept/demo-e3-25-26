import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, RouterLink, RouterLinkActive],
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
