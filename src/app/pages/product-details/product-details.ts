import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  route = inject(ActivatedRoute);
  router = inject(Router);
  httpClient = inject(HttpClient);

  product : WritableSignal<Product | null> = signal(null)

  ngOnInit() {
    this.route.params.subscribe((parametres) => {
      if (!Number.isNaN(+parametres['id'])) {

        this.httpClient
          .get<Product>(`https://dummyjson.com/products/${parametres['id']}`)
          .subscribe(product => this.product.set(product));

      } else {
        //le parametre n'est pas un nombre
        this.router.navigate(['/404']);
      }
    });
  }
}
