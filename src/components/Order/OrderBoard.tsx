import React, { useContext } from "react";
import { StatusContext } from "../../context/StatusContext";
import { Order as OrderType } from "../../types/Order";
import Order from "./Order";

interface OrderBoardProps {
  title: string;
  icon: string;
  status: string;
  orders: OrderType[];
}

const OrderBoard = ({ title, icon, status, orders }: OrderBoardProps) => {
  const { currentStatus } = useContext(StatusContext);

  return (
    <div
      className={`${
        currentStatus === status ? "block" : "hidden"
      } w-full flex flex-col items-center font-interbold text-black sm:block`}
    >
      <h2 className="mb-2 w-fit text-lg font-bold">{title + " " + icon}</h2>
      <div className="flex w-full flex-col gap-3">
        {orders.map(({ user, createdAt, status, products }, index) => (
          <Order
            key={index}
            user={user}
            createdAt={createdAt}
            status={status}
            products={products}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderBoard;
