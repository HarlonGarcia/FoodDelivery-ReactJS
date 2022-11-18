export interface User {
  _id: string;
  name: string;
  address: {
    street: string;
    number: string;
    reference: string;
  };
}
