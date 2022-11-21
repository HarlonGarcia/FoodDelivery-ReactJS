import close from "../../assets/svg/close.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface OrderModalProps {
  visible: Boolean;
  order: Order;
  onClose: () => void;
  onCancel: () => Promise<void>;
  isLoading: boolean;
  onStatusChange: () => void;
}

const OrderModal = ({
  visible,
  order,
  onClose,
  onCancel,
  isLoading,
  onStatusChange,
}: OrderModalProps) => {
  const total = order.products.reduce((total, { quantity, product }) => {
    return total + product.price * quantity;
  }, 0);

  if (!visible || !order) return null;
  return (
    <div className="fixed left-0 top-0 z-40 w-full h-full flex items-center justify-center bg-black-100/80 backdrop-blur-sm">
      <div className="bg-white min-w-[18rem] max-w-[30rem] w-2/3 h-fit p-8 rounded-md text-left text-black font-inter xl:max-w-[38rem]">
        <header className="flex items-center justify-between mb-4 lg:text-lg">
          <strong>{order.user.name}</strong>
          <button onClick={onClose}>
            <img src={close} alt="close button" className="lg:w-7" />
          </button>
        </header>
        <div className="mb-4">
          <small className="opacity-80 sm:text-sm">Status do pedido</small>
          <div className="flex gap-2">
            <span>
              {order.status === "WAITING" && "⏰"}
              {order.status === "IN_PRODUCTION" && "🔥"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Em espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação "}
              {order.status === "DONE" && "Pronto"}
            </strong>
          </div>
        </div>
        <div className="mb-7">
          <small className="opacity-80 sm:text-sm">Itens</small>
          <div className="mt-1.5">
            {order.products.map(({ _id, quantity, product }) => (
              <div key={_id} className="flex text-sm mb-2 sm:text-base">
                <div className="w-12 h-10 overflow-hidden rounded-md mr-1.5 sm:mr-3 sm:w-14 sm:h-12">
                  <img
                    src={`http://localhost:3001/uploads/${product.image_url}`}
                    alt={product.name}
                    className="h-full object-cover"
                  />
                </div>
                <span className="mr-1.5 sm:mr-2">{quantity}x</span>
                <div className="flex flex-col">
                  <strong className="truncate">{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mb-6 text-sm sm:text-base lg:text-lg">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>

        <div className="flex flex-col text-sm sm:text-base xl:text-lg">
          {order.status !== "DONE" ? (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 p-2 mb-3
            rounded-full bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={false}
              onClick={onStatusChange}
            >
              <span>{order.status === "WAITING" ? "🔥" : "✅"}</span>
              <span>
                {order.status === "WAITING"
                  ? "Iniciar produção"
                  : "Concluir pedido"}
              </span>
            </button>
          ) : null}
          <button
            className="text-red font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            onClick={onCancel}
          >
            {order.status === "DONE" ? "Excluir pedido" : "Cancelar pedido"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
