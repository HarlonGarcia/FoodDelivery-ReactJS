import { useState } from "react";
import { Products } from "../../types/Products";
import { User } from "../../types/User";
import OrderModal from "./OrderModal";

interface OrderProps {
  user: User;
  createdAt: Date;
  status: string;
  products: Products[];
}

const Order = ({ user, createdAt, status, products }: OrderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const itemsQuantity: number[] = products.map(({ quantity }) => quantity);
  const itemsPrice: number[] = products.map(({ product }) => product.price);

  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += itemsPrice[i] * itemsQuantity[i];
  }

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <div
      className="relative overflow-hidden h-36 flex flex-col bg-beige-100 rounded-md text-white font-inter"
      onClick={handleOpenModal}
    >
      <OrderModal visible={isModalOpened} />
      <div className="flex flex-col p-4 pb-2">
        <h3 className="w-fit text-sm font-interbold text-beige-200">
          {products.length}
          {products.length > 1 ? " itens" : " item"}:
        </h3>
        <p className="w-fit truncate text-md mb-3">
          {products.map((order, index) => {
            let current = order.quantity + "x " + order.product.name;
            if (index !== products.length - 1) {
              current = current + ", ";
            }
            return current;
          })}
        </p>

        <h3 className="w-fit text-beige-200 text-sm font-interbold">
          Total:{" "}
          <span className="text-white">
            R$ <span className="text-lg">{total}</span>
          </span>
        </h3>
      </div>
      <div className="absolute bottom-0 w-full h-10 flex justify-between items-center px-4 bg-beige-200">
        <h3>{createdAt.getHours() + "h" + createdAt.getMinutes() + "min"}</h3>
        <h3>{user.name}</h3>
      </div>
    </div>
  );
};

export default Order;
