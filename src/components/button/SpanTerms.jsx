import { useState } from "react";
import Modal from "../modal/Modal";
import Bundling from "../modal/modal-content/terms/Bundling";
import BundlingJuanda from "../modal/modal-content/terms/BundlingJuanda";
import IplJuanda from "../modal/modal-content/terms/IplJuanda";
import InetOnly from "../modal/modal-content/terms/InetOnly";

export default function SpanTerms({ bundling, bundlingJuanda, bundlingIpl }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-800 underline underline-offset-5 decoration-blue-500 hover:decoration-red-400 hover:text-red-500 focus:text-red-600"
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
