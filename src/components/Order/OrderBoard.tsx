import React, { useContext } from "react";
import { StatusContext } from "../../context/StatusContext";
import { Order as OrderType } from "../../types/Order";
import Order from "./Order";

interface OrderBoardProps {
  title: string;
  icon: string;
  status: string;
  orders: OrderType[];
  onCancelOrder: (orderId: string) => void;
  onStatusChange: (orderId: string, status: OrderType["status"]) => void;
}

const OrderBoard = ({
  title,
  icon,
  status,
  orders,
  onCancelOrder,
  onStatusChange,
}: OrderBoardProps) => {
  const { currentStatus } = useContext(StatusContext);

  return (
    <div
      className={`${
        currentStatus === status ? "block" : "hidden"
      } w-full flex flex-col items-center font-interbold text-center text-black sm:block sm:w-fit`}
    >
      <h2 className="mb-2 text-lg font-bold">{title + " " + icon}</h2>
      <div className="flex flex-col items-center w-full gap-3 sm:w-fit">
        {orders.map(({ _id, user, createdAt, status, products }, index) => (
          <Order
            _id={_id}
            key={index}
            user={user}
            createdAt={createdAt}
            status={status}
            products={products}
            onCancel={onCancelOrder}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderBoard;
