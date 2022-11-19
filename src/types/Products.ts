export interface Products {
  _id: string;
  quantity: number;
  product: {
    name: string;
    description: string;
    image_url: string;
    price: number;
  };
}
