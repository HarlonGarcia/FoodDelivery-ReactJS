import React from "react";
import { Order as OrderType } from "../../types/Order";
import Order from "./Order";

interface OrderBoardProps {
  title: string;
  icon: string;
  orders: OrderType[];
}

const OrderBoard = ({ title, icon, orders }: OrderBoardProps) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">{title + " " + icon}</h2>
      <div className="flex flex-col gap-2">
        {orders.map(({ user, status, products }, index) => (
          <Order key={index} user={user} status={status} products={products} />
        ))}
      </div>
    </div>
  );
};

export default OrderBoard;
