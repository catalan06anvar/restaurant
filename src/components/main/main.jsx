import About from "./about/About";
import OftenOrder from "./about/oftenOrder/OftenOrder";
import Hero from "./hero/Hero";
import Slide from "./slider/Slide";
const Main = ({
  db,
  setDb,
  onAddData,
  onModalClick,
  modalId,
  setModalId,
  setActiveModal,
  activeModal,
}) => {
  return (
    <main>
      <About />
      <Slide />
      <Hero />
      <OftenOrder
        onModalClick={onModalClick}
        modalId={modalId}
        setModalId={setModalId}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        db={db}
        setDb={setDb}
        onAddData={onAddData}
      />
    </main>
  );
};

export default Main;
