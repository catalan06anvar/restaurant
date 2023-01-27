import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../common/modal/Modal";
import { Card } from "./Card";

const OftenOrder = ({ db, setDb, onAddData }) => {
  const [activeModal, setActiveModal] = useState(true);
  const [modalId, setModalId] = useState(null);

  const onModalClick = (index) => {
    setActiveModal(false);
    setModalId(index);
  };

  return (
    <section class="often-order">
      <div class="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div class="often-order__cards d-flex">
          {db.map((item) => (
            <Card
              onModalClick={onModalClick}
              onAddData={onAddData}
              key={item.id}
              modalId={modalId}
              setModalId={setModalId}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              item={item}
              index={item.id}
              {...item}
            />
          ))}
        </div>

        <Modal
          // {...item}
          // count={count}
          //   dataId={id}
          //   name={name}
          //   price={price}
          onModalClick={onModalClick}
          onAddData={onAddData}
          modalId={modalId}
          setModalId={setModalId}
          // id={item.id}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />

        <Link to="/menu">
          <span class="button button--outline">Показать все меню</span>{" "}
        </Link>
      </div>
    </section>
  );
};

export default OftenOrder;
