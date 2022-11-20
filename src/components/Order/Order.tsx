import { useState } from "react";
import { Order as OrderType } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import OrderModal from "./OrderModal";

const Order = (props: OrderType) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const total = props.products.reduce((total, { quantity, product }) => {
    return total + product.price * quantity;
  }, 0);

  const handleOpenModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <>
      <OrderModal
        visible={isModalOpened}
        order={props}
        onClose={handleOpenModal}
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
          <p className="w-fit truncate text-md mb-3">
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
          <h3>
            {props.createdAt.getHours() +
              "h" +
              props.createdAt.getMinutes() +
              "min"}
          </h3>
          <h3>{props.user.name}</h3>
        </div>
      </button>
    </>
  );
};

export default Order;
