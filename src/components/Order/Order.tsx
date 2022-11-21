import { useState } from "react";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import OrderModal from "./OrderModal";
import { toast } from "react-toastify";
import { Order as OrderType } from "../../types/Order";

interface OrderProps {
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
  onCancel: (orderId: string) => void;
  onStatusChange: (orderId: string, status: OrderType["status"]) => void;
}

const Order = (props: OrderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = props.products.reduce((total, { quantity, product }) => {
    return total + product.price * quantity;
  }, 0);

  const handleOpenModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleStatusChange = async () => {
    const status = props.status === "WAITING" ? "IN_PRODUCTION" : "DONE";
    console.log(props._id, status);

    await api.patch(`/orders/${props._id}`, { status });

    props.onStatusChange(props._id, status);
    toast.success(`O pedido de ${props.user.name} teve o status alterado`);
    setIsLoading(false);
    setIsModalOpened(false);
  };

  const handleCancelOrder = async () => {
    setIsLoading(true);
    await api.delete(`/orders/${props._id}`);

    toast.success(`O pedido de ${props.user.name} foi cancelado`);
    props.onCancel(props._id);
    setIsLoading(false);
    setIsModalOpened(false);
  };

  return (
    <>
      <OrderModal
        visible={isModalOpened}
        order={props}
        onClose={handleOpenModal}
        onCancel={handleCancelOrder}
        isLoading={isLoading}
        onStatusChange={handleStatusChange}
      />
      <button
        className="relative overflow-hidden h-36 max-w-[24rem] min-w-[16rem] w-2/3 flex flex-col bg-beige-100 rounded-md cursor-pointer text-white font-inter sm:max-w-none"
        onClick={handleOpenModal}
      >
        <div className="flex flex-col p-4 pb-2">
          <h3 className="w-fit text-sm font-interbold text-beige-200">
            {props.products.length}
            {props.products.length > 1 ? " itens" : " item"}:
          </h3>
          <p className="w-fit max-w-[80%] truncate text-md mb-3">
            {props.products.map((order, index) => {
              let current = order.quantity + "x " + order.product.name;
              if (index !== props.products.length - 1) {
                current = current + ", ";
              }
              return current;
            })}
          </p>

          <h3 className="w-fit text-beige-200">
            Total:{" "}
            <strong className="text-white">{formatCurrency(total)}</strong>
          </h3>
        </div>
        <div className="absolute bottom-0 w-full h-10 flex justify-between items-center px-4 bg-beige-200">
          <h3>{"Oi"}</h3>
          <h3>{props.user.name}</h3>
        </div>
      </button>
    </>
  );
};

export default Order;
