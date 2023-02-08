import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUsPage } from "./components/aboutUsPage/AboutUsPage";
import Basket from "./components/basket/Basket";
import Modal from "./components/common/modal/Modal";
import Contacts from "./components/contacts/Contacts";
import { data } from "./components/data/data";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import OurMenuPage from "./components/ourMenuPage/OurMenuPage";

function App() {
  const [db, setDb] = useState(data[0].oftenOrderCards);
  const [emptyBasketData, setEmptyBasketData] = useState([]);
  const [activeModal, setActiveModal] = useState(true);
  const [modalId, setModalId] = useState(null);

  const onModalClick = (index) => {
    setActiveModal(false);
    setModalId(index);
  };

  const totalPrice = emptyBasketData.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.price,
    0
  );
  const totalCount = emptyBasketData.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.count,
    0
  );

  const onAddData = (item) => {
    const existData = emptyBasketData.find((el) => el.id === item.id);
    if (existData) {
      const newData = emptyBasketData.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total + 1 } : el
      );
      setEmptyBasketData(newData);
    } else {
      const newData = [...emptyBasketData, { ...item, total: 1 }];
      setEmptyBasketData(newData);
    }
  };

  const onDeleteData = (item) => {
    const existData = emptyBasketData.find((el) => el.id === item.id);
    if (existData.total === 1) {
      const newData = emptyBasketData.filter((el) => el.id !== item.id);
      setEmptyBasketData(newData);
    } else {
      const newData = emptyBasketData.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total - 1 } : el
      );
      setEmptyBasketData(newData);
    }
  };

  // const onRemoveItem = (id) =>{
  //   setEmptyBasketData(el=>emptyBasketData.filter(el=> el.id !== id))
  // }

  const onClearCardData = () => {
    setEmptyBasketData([]);
  };

  return (
    <div class="wrapper">
      <Header totalPrice={totalPrice} totalCount={totalCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onModalClick={onModalClick}
              modalId={modalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              onAddData={onAddData}
              db={db}
              setDb={setDb}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <OurMenuPage
              db={db}
              setDb={setDb}
              onModalClick={onModalClick}
              modalId={modalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              onAddData={onAddData}
            />
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/basket"
          element={
            <Basket
              // onRemoveItem={onRemoveItem}
              onDeleteData={onDeleteData}
              onClearCardData={onClearCardData}
              onAddData={onAddData}
              totalPrice={totalPrice}
              totalCount={totalCount}
              emptyBasketData={emptyBasketData}
            />
          }
        />
        <Route path="/modal" element={<Modal />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>

      {/*  */}

      {/* */}
      {/* <EmptyBasket/> */}
      {/*  */}
      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
