import React, { useContext } from "react";
import { StatusContext } from "../../context/StatusContext";
import { Order as OrderType } from "../../types/Order";
import Order from "./Order";

import { TbToolsKitchen } from "react-icons/tb";
import { RiTimerLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

interface OrderBoardProps {
  title: string;
  status: string;
  orders: OrderType[];
  onCancelOrder: (orderId: string) => void;
  onStatusChange: (orderId: string, status: OrderType["status"]) => void;
}

const OrderBoard = ({
  title,
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
      } overflow-hidden w-full h-[27rem] min-w-[15rem] flex flex-col items-center font-inter bg-white mb-8 rounded-md p-6 text-center text-black sm:block sm:w-52`}
    >
      <div className="flex items-center justify-center mb-4">
        <strong className="text-lg font-interbold mr-2">{title + " "}</strong>
        <span>
          {status === "WAITING" && <RiTimerLine className="w-5 h-5" />}
          {status === "IN_PRODUCTION" && <TbToolsKitchen className="w-5 h-5" />}
          {status === "DONE" && <BiCheckCircle className="w-5 h-5" />}
        </span>
      </div>
      <div className="overflow-x-hidden overflow-y-auto box-content pr-3 scroll-mb-12 w-full h-full flex flex-col items-center gap-3 pb-6">
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
