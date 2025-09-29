import { useState } from "react";
import Form from "../modal/modal-content/subscribe/Form";
import Modal from "../modal/Modal";
import InetOnly from "../modal/modal-content/terms/InetOnly";

export default function Subscribe({
  textHeadForm,
  paket,
  tower,
  bundlingJuanda,
  bundling,
  bundlingIpl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-sky-500 m-auto mt-4 block text-slate-50 py-1 px-2 rounded-lg hover:bg-blue-600 hover:shadow-md"
      >
        Berlangganan
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          setIsOpen={setIsOpen}
          textHeadForm={textHeadForm}
          bundlingJuanda={bundlingJuanda}
          paket={paket}
          towerOpt={tower}
          internetOnly={true}
          bundling={bundling}
          bundlingIpl={bundlingIpl}
        />
      </Modal>
    </>
  );
}
