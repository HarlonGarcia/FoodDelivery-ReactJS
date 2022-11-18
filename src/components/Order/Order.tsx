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
    <div className="flex flex-col items-center bg-orange/75 rounded-lg p-4 py-6 text-white font-open min-w-min max-w-xs sm:min-w-[10rem]">
      <h3 className="font-semibold text-lg text-orange-200 mb-1"></h3>
      <p className="text-sm mb-5">{products.length}</p>
      <div
        className={`${
          status === "DONE"
            ? "bg-green/50 border-green"
            : "bg-red/50 border-red"
        } border-2 justify-self-end w-fit text-sm p-1 px-2 rounded-md`}
      >
        {status}
      </div>
    </div>
  );
};

export default Order;
