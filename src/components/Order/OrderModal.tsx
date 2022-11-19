import React from "react";
import close from "../../assets/svg/close.svg";

interface OrderModalProps {
  visible: Boolean;
}

const OrderModal = ({ visible }: OrderModalProps) => {
  if (!visible) return null;
  return (
    <div className="fixed left-0 top-0 z-40 w-full h-full flex items-center justify-center bg-black-100/80 backdrop-blur-sm">
      <div className="bg-white w-64 p-8 rounded-md text-black font-inter">
        <header className="flex justify-between mb-4">
          <strong>Harlon</strong>

          <button>
            <img src={close} alt="close button" />
          </button>
        </header>
        <div>
          <small className="opacity-80">Status do pedido</small>
          <div>
            <span>⏰</span>
            <strong>Em produção</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
