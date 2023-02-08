import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUsPage } from "./components/aboutUsPage/AboutUsPage";
import Basket from "./components/basket/Basket";
import Modal from "./components/common/modal/Modal";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import OurMenuPage from "./components/ourMenuPage/OurMenuPage";
import axios from "axios";

function App() {
  const [db, setDb] = useState([]);
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
      localStorage.setItem("basket", JSON.stringify(newData));
    } else {
      const newData = [...emptyBasketData, { ...item, total: 1 }];
      setEmptyBasketData(newData);
      localStorage.setItem("basket", JSON.stringify(newData));
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
  //   const newData = emptyBasketData.filter((el)=>el.id !== id)
  //   setEmptyBasketData(el=>emptyBasketData.filter(el=> el.id !== id)
  //   setEmptyBasketData(newData);
  //   localStorage.setItem('basket', JSON.stringify(newData))
  //   )
  // }

  const onClearCardData = () => {
    setEmptyBasketData([]);
  };

  useEffect(() => {
    setEmptyBasketData(
      localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket"))
        : []
    );
  }, []);


// const fetchData = async() =>{
//   let resp = await fetch('http://localhost:3000/db.json')
//   let data = await resp.json();
//   console.log(data.data);
//   setDb(data.data[0].oftenOrderCards);
// }

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then (({data}) => setDb(data.data[0].oftenOrderCards))
    // fetchData()
    // fetch("http://localhost:3000/db.json")
    //   .then((response) => response.json())
    //   .then((data) => setDb(data.data[0].oftenOrderCards));
  }, []);

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
