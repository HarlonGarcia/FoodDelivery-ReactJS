import { Order as OrderType } from "../../types/Order";
import OrderBoard from "./OrderBoard";

const OrderContainer = () => {
  const orders: OrderType[] = [
    {
      _id: "aaaaaaa",
      user: {
        _id: "bbbbbbb",
        name: "Harlon",
        address: {
          street: "Rua 1",
          number: "2339-A",
          reference: "Do lado da Rua 2",
        },
      },
      status: "WAITING",
      products: [
        {
          _id: "cccccccc",
          quantity: 2,
          product: {
            name: "Pizza",
            description: "Muito boa",
            image_url: "url/aqui/",
            price: 50,
          },
        },
      ],
    },
    {
      _id: "ddddddd",
      user: {
        _id: "eeeeeeee",
        name: "João",
        address: {
          street: "Rua 90",
          number: "98-A",
          reference: "Do lado da Rua 91",
        },
      },
      status: "DONE",
      products: [
        {
          _id: "ffffffffff",
          quantity: 4,
          product: {
            name: "Hamburger",
            description: "Muito bom",
            image_url: "url/aqui/",
            price: 20,
          },
        },
        {
          _id: "gggggg",
          quantity: 2,
          product: {
            name: "Hamburger",
            description: "Muito bom",
            image_url: "url/aqui/",
            price: 20,
          },
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="mb-8 w-fit text-2xl font-bold text-orange-200">PEDIDOS</h2>
      <div className="flex gap-6 w-full">
        <OrderBoard
          title="Esperando"
          icon="⏰"
          status="WAITING"
          orders={orders}
        />
        <OrderBoard
          title="Em preparação"
          icon="🔥"
          status="IN_PRODUCTION"
          orders={orders}
        />
        <OrderBoard title="Feito" icon="✔" status="DONE" orders={orders} />
      </div>
    </div>
  );
};

export default OrderContainer;
