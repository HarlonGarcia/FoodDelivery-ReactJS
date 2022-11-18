import React from "react";
import { Products } from "../../types/Products";
import { User } from "../../types/User";

interface OrderProps {
  user: User;
  status: string;
  products: Products[];
}

const Order = ({ user, status, products }: OrderProps) => {
  return (
    <div className="flex flex-col items-center bg-orange/75 rounded-lg p-4 py-6 text-white font-inter">
      <h3 className="font-semibold text-lg text-orange-200 mb-1"></h3>
      <p className="text-sm mb-5">{products.length}</p>
    </div>
  );
};

export default Order;
