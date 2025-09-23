import { useState } from "react";
import Modal from "../modal/Modal";
import Bundling from "../modal/modal-content/term-n-condt/Bundling";
import InetOnly from "../modal/modal-content/term-n-condt/InetOnly";
import BundlingJuanda from "../modal/modal-content/term-n-condt/BundlingJuanda";
import IplJuanda from "../modal/modal-content/term-n-condt/IplJuanda";

export default function TnC({ dvb, tncBundling, tncJuanda }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 m-auto block text-slate-100 py-1 px-3 rounded-lg hover:bg-red-600 hover:shadow-md"
      >
        Syarat & Ketentuan
      </button>
      {tncJuanda ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {dvb ? (
            <IplJuanda setIsOpen={setIsOpen} />
          ) : (
            <BundlingJuanda setIsOpen={setIsOpen} />
          )}
        </Modal>
      ) : (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {tncBundling ? (
            <Bundling setIsOpen={setIsOpen} />
          ) : (
            <InetOnly setIsOpen={setIsOpen} />
          )}
        </Modal>
      )}
    </>
  );
}
