export interface Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    address: {
      street: string;
      number: string;
      reference: string;
    };
  };
  status: string;
  products: {
    _id: string;
    quantity: Number;
    product: {
      name: string;
      description: string;
      image_url: string;
      price: Number;
    };
  }[];
}
