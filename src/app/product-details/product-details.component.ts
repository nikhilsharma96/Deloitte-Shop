import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private itemService:SearchService) { }

  selectedProduct:any
  ngOnInit(): void {
    this.itemService.getSelectedData().subscribe((res:any)=>{
      this.selectedProduct=res;
      console.log(res)
    })
  }

}
