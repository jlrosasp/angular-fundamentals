import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
  }

  addProduct() {

    const params = {
      "productId": "554422233",
      "productCode": "MM-9876-WQ",
      "productName": "Pantalla Raspberry Pi",
      "productCategory": "Periferico",
      "productTags": ["display", "monitor", "4K", "16"],
      "productStock": 15,
      "productMinStock": 15,
      "productMaxStock": 40
    }

    this.apiSvc.newProduct(params).subscribe((result: any) => {
      console.log('Home Component: addProduct: result: ', result);
    });
  }

  getProductById(termino: string) {
    this.apiSvc.getProductById(termino).subscribe((result: any) => {
      console.log('Home Component: getProductById: result: ', result);
    });
  }

}
