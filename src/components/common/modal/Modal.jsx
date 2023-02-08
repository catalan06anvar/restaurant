import React, { useState } from "react";
import "./Modal.css";

import ModalT from "../../common/image/modal-t.svg";
import ModalT1 from "../../common/image/modal-t1.svg";
import ModalT2 from "../../common/image/modal-t2.svg";
import ModalT3 from "../../common/image/modal-t3.svg";
import cn from "classnames";

const Modal = ({
  activeModal,
  setActiveModal,
  modalId,
  onAddData,
  type,
  size,
  taste
}) => {
  const availabeTypes = ["тонкое", "традиционное"];
  const availableSizes = ["20", "30", "40"];
  const [activeTypes, setActiveTypes] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);
  const availableTastes = [
    {
      id: 1,
      img: ModalT,
      name: 'С горчицой',
    },
    {
      id: 2,
      img: ModalT1,
      name: 'С морепродуктами',
    },
    {
      id: 3,
      img: ModalT2,
      name: 'Больше сыра',
    },
    {
      id: 4,
      img: ModalT3,
      name: 'С халапеньо',
    },
  ]
  

  const selectedSize = (index) => {
    setActiveSizes(index);
    console.log(index);
  };

  const selectedType = (index) => {
    setActiveTypes(index);
    console.log(index);
  };

  const selectedTaste = (index) =>{
    setActiveTastes(index)
    console.log(index);
  }


  
  const [activeTastes, setActiveTastes] = useState (0);
  

  const onAdd = () => {
    const addedData = {
      id: modalId.id,
      name: modalId.name,
      modalImg: modalId.modalImg,
      price: modalId.price,
      count: modalId.count,
      type: availabeTypes[activeTypes],
      size: availableSizes[availableSizes],
      taste: availableTastes[activeTastes],
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
                  {availabeTypes.map((type, index) => (
                    <li
                      key={type.id}
                      onClick={() => selectedType(index)}
                      className={cn({
                        active: activeTypes === index,
                      })}
                    >
                      {type}
                    </li>
                  ))}
                </ul>

                <ul>
                  {availableSizes.map((size, index) => (
                    <li
                      key={size.id}
                      onClick={() => selectedSize(index)}
                      className={cn({
                        active: activeSizes === index,
                      })}
                    >
                      {size} см
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="add-type-text">Добавьте по вкусу</p>
            <div className="modal-choose-type d-flex">

              {
                availableTastes.map((taste,index)=>(
                  <div key={taste.id} onClick={() => selectedTaste(index)}>
                  <div>
                    <img src={taste.img} alt='' />
                  </div>
                  <p>{taste.name}</p>
                  </div>
                ))
              }
              
                
              
             
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
