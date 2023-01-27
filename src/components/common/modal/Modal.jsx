import React from "react";
import "./Modal.css";

import ModalT from "../../common/image/modal-t.svg";
import ModalT1 from "../../common/image/modal-t1.svg";
import ModalT2 from "../../common/image/modal-t2.svg";
import ModalT3 from "../../common/image/modal-t3.svg";

const Modal = ({ activeModal, setActiveModal, modalId, onAddData }) => {
  const onAdd = () => {
    const addedData = {
      id: modalId.id,
      name: modalId.name,
      modalImg: modalId.modalImg,
      price: modalId.price,
      count: modalId.count,
    };
    onAddData(addedData);
    console.log(addedData);
  };

  return (
    <div
      className={activeModal ? "modal-wrapper active" : "modal-wrapper"}
      onClick={() => setActiveModal(true)}
    >
      <div className="modal d-flex" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex">
          <img src={modalId && modalId.modalImg} alt="" />
          <div>
            <div className="modal-info d-flex">
              <h3 className="pizza-block__title">{modalId && modalId.name}</h3>
              <div className="pizza-block__selector">
                <ul>
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul>
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
            </div>
            <p className="add-type-text">Добавьте по вкусу</p>
            <div className="modal-choose-type d-flex">
              <div>
                <div>
                  <img src={ModalT} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={ModalT1} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={ModalT2} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={ModalT3} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
            </div>
          </div>
        </div>

        <button className="button modal-btn" onClick={onAdd}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Modal;
