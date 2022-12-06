import { useEffect, useState } from "react";
import { socket } from "../../utils/socket";
import { api } from "../../utils/api";
import { Order } from "../../types/Order";
import OrderBoard from "./OrderBoard";

const OrderContainer = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  console.log("oi");

  useEffect(() => {
    const addOrder = (order: Order) => {
      setOrders((prevState) => prevState.concat(order));
    };

    socket.on("orders@new", addOrder);

    return () => {
      socket.off("orders@new", addOrder);
    };
  }, []);

  useEffect(() => {
    api.get("/orders").then(({ data }) => setOrders(data));
  }, []);

  const handleCancelOrder = (orderId: string) => {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  };

  const handleOrderStatusChange = (
    orderId: string,
    status: Order["status"]
  ) => {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  const waitingOrders = orders.filter((order) => order.status === "WAITING");
  const inProductionOrders = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const finishedOrders = orders.filter((order) => order.status === "DONE");

  return (
    <div className="flex flex-col items-center h-[80vh]">
      <h2 className="w-fit text-xl font-interbold font-black text-beige-200 mb-3 sm:mb-6">
        PEDIDOS
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-10">
        <OrderBoard
          title="Fila de espera"
          status="WAITING"
          orders={waitingOrders}
          onCancelOrder={handleCancelOrder}
          onStatusChange={handleOrderStatusChange}
        />
        <OrderBoard
          title="Em preparação"
          status="IN_PRODUCTION"
          orders={inProductionOrders}
          onCancelOrder={handleCancelOrder}
          onStatusChange={handleOrderStatusChange}
        />
        <OrderBoard
          title="Feito"
          status="DONE"
          orders={finishedOrders}
          onCancelOrder={handleCancelOrder}
          onStatusChange={handleOrderStatusChange}
        />
      </div>
    </div>
  );
};

export default OrderContainer;
