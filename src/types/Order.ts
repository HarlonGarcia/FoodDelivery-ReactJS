export interface Order {
  _id: string;
  user: {
    _id: string;
    name: string;
    phone: string;
    address: {
      street: string;
      number: string;
      reference: string;
    };
  };
  createdAt: Date;
  status: "WAITING" | "IN_PRODUCTION" | "DONE";
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      description: string;
      image_url: string;
      price: number;
    };
  }[];
}
