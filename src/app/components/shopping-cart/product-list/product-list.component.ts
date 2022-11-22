import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filterForm : FormGroup;
  productList : Product [] =[]
  wishlist: number[] = []
  constructor(private productService:ProductService,private wishlistService: WishlistService ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
    this.createForm();
    }
  
  createForm(){
    this.filterForm  = new FormGroup({
      from : new FormControl(),
      to: new FormControl()
    })
  }
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds
    })
  }

  getFilterData(form: FormGroup){
    console.log(form.value)
    const from = form.get('from').value;
    const to = form.get('to').value
    this.filterProduct(from, to);
  }

  filterProduct(max : any , min: any){
    var newlist = this.productList;
    this.productList = []
    for (var i=0; i< newlist.length -1 ; i++){
      if(newlist[i].price >= max && newlist[i].price <= min){
          this.productList.push(newlist[i])
          console.log(newlist[i].price)
      }
    }
    console.log(this.productList)
  }
  
  
}
