import { Order } from "../../types/Order";
import OrderBoard from "./OrderBoard";

const OrderContainer = () => {
  const orders: Order[] = [
    {
      _id: "637953b7c68c8a7fbf7d3202",
      user: {
        _id: "aaaaaa",
        name: "Julio",
        address: {
          street: "Rua 5",
          number: "80-A",
          reference: "Do lado da Rua 6",
        },
      },
      createdAt: new Date(),
      status: "WAITING",
      products: [
        {
          product: {
            name: "Pizza Marguerita",
            description: "Pizza marguerita com borda recheada",
            image_url: "1668895490101-marguerita.png",
            price: 50,
          },
          quantity: 4,
          _id: "637953b7c68c8a7fbf7d3204",
        },
      ],
    },
    {
      _id: "637953d3c68c8a7fbf7d3206",
      user: {
        _id: "bbbbbbb",
        name: "Harlon",
        address: {
          street: "Rua 1",
          number: "2339-A",
          reference: "Do lado da Rua 2",
        },
      },
      createdAt: new Date(),
      status: "WAITING",
      products: [
        {
          product: {
            name: "Pizza Queijo",
            description: "Pizza queijo com borda recheada",
            image_url: "1668895567528-marguerita.png",
            price: 64,
          },
          quantity: 2,
          _id: "637953d3c68c8a7fbf7d3208",
        },
      ],
    },
  ];
  // const orders: Order[] = [
  //   {
  //     _id: "aaaaaaa",
  //     user: {
  //       _id: "bbbbbbb",
  //       name: "Harlon",
  //       address: {
  //         street: "Rua 1",
  //         number: "2339-A",
  //         reference: "Do lado da Rua 2",
  //       },
  //     },
  //     createdAt: new Date(),
  //     status: "WAITING",
  //     products: [
  //       {
  //         _id: "cccccccc",
  //         quantity: 2,
  //         product: {
  //           name: "Pizza",
  //           description: "Muito boa",
  //           image_url: "url/aqui/",
  //           price: 50,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     _id: "ddddddd",
  //     user: {
  //       _id: "eeeeeeee",
  //       name: "João",
  //       address: {
  //         street: "Rua 90",
  //         number: "98-A",
  //         reference: "Do lado da Rua 91",
  //       },
  //     },
  //     createdAt: new Date(),
  //     status: "DONE",
  //     products: [
  //       {
  //         _id: "ffffffffff",
  //         quantity: 4,
  //         product: {
  //           name: "Hamburger",
  //           description: "Muito bom",
  //           image_url: "url/aqui/",
  //           price: 20.5,
  //         },
  //       },
  //       {
  //         _id: "gggggg",
  //         quantity: 2,
  //         product: {
  //           name: "Hamburger",
  //           description: "Muito bom",
  //           image_url: "url/aqui/",
  //           price: 51.3,
  //         },
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="w-fit mb-8 text-2xl font-interbold font-black text-orange-200">
        PEDIDOS
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-10">
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
        <OrderBoard title="Feito" icon="✅" status="DONE" orders={orders} />
      </div>
    </div>
  );
};

export default OrderContainer;
