export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  
    constructor(id:any, name:any, description = '', price = 0, imageUrl='https://rukminim1.flixcart.com/image/832/832/xif0q/top/l/y/j/xl-woman-top-nvh-original-imagj2nzzkbngvzh.jpeg?q=70') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }