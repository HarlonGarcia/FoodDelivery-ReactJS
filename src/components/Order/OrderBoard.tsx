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
      } w-full min-w-[15rem] min-h-[16rem] h-fit flex flex-col items-center font-inter bg-white rounded-md p-6 text-center text-black sm:block sm:w-3/12 sm:min-w-[18rem]`}
    >
      <h2 className="mb-4 text-lg font-interbold">{title + " " + icon}</h2>
      <div className="flex flex-col items-center w-full h-full gap-3 pb-6">
        {orders.length === 0 ? (
          <small className="text-[#666] mt-16">
            Não há itens aqui <span className="ml-1">{":("}</span>
          </small>
        ) : null}
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
