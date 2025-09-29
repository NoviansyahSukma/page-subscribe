import { useState } from "react";
import Modal from "../modal/Modal";
import Bundling from "../modal/modal-content/terms/Bundling";
import BundlingJuanda from "../modal/modal-content/terms/BundlingJuanda";
import IplJuanda from "../modal/modal-content/terms/IplJuanda";
import InetOnly from "../modal/modal-content/terms/InetOnly";

export default function Terms({ bundling, bundlingJuanda, bundlingIpl }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 m-auto block text-slate-100 py-1 px-3 rounded-lg hover:bg-red-600 hover:shadow-md"
      >
        Syarat & Ketentuan
      </button>

      {bundlingJuanda ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {bundlingIpl ? (
            <IplJuanda setIsOpen={setIsOpen} />
          ) : (
            <BundlingJuanda setIsOpen={setIsOpen} />
          )}
        </Modal>
      ) : (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          {bundling ? (
            <Bundling setIsOpen={setIsOpen} />
          ) : (
            <InetOnly setIsOpen={setIsOpen} />
          )}
        </Modal>
      )}
    </>
  );
}
