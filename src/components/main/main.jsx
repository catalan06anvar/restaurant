import About from "./about/About";
import OftenOrder from "./about/oftenOrder/OftenOrder";
import Hero from "./hero/Hero";
import Slide from "./slider/Slide";
import "./Main.scss";

const Main = ({
  db,
  setDb,
  onAddData,
  onModalClick,
  modalId,
  setModalId,
  setActiveModal,
  activeModal,
  isLoading,
  setIsLoading,
  sliderData,
}) => {
  return (
    <main>
      <About />
      <Slide sliderData={sliderData} />
      <Hero />
      <OftenOrder
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onModalClick={onModalClick}
        modalId={modalId}
        setModalId={setModalId}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        db={db}
        setDb={setDb}
        onAddData={onAddData}
      />
      {/* <div className="test">
        <h1>Hello from react</h1>
        <div className="test__block">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            dolorem praesentium vel?
          </p>
          <div className='test__block_cards'>
            <div className="test__block_card">
            <p>Lorem, ipsum.</p>
            <button>click</button>
          </div>
          </div>
          
        </div>
      </div> */}
    </main>
  );
};

export default Main;
