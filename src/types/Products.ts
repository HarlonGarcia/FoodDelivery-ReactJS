export interface Products {
  _id: string;
  quantity: Number;
  product: {
    name: string;
    description: string;
    image_url: string;
    price: Number;
  };
}
