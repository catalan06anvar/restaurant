import { useMemo } from "react";
import { useState } from "react";
import SearchNormal1 from "../common/image/search-normal 1.svg";
import Modal from "../common/modal/Modal";
import Pagination from "../common/pagination/Pagination";
import { Card } from "../main/about/oftenOrder/Card";
import { Categories } from "./categories/Categories";
import "./OurMenuPage.css";
import { Sort } from "./sort/Sort";

const OurMenuPage = ({
  db,
  setDb,
  onAddData,
  modalId,
  activeModal,
  setActiveModal,
  onModalClick,
}) => {
  const [selectedType, setSelectedType] = useState({ type: "rating" });
  const [searchQuary, setSearchQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage] = useState(4);

  const lastPage = currentPage * prevPage;
  const firstPage = lastPage - prevPage;
  const currentMenuPage = db.slice(firstPage, lastPage);

  const sortTypes = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
  ];

  const sortedData = useMemo(() => {
    console.log("Функция отработала");

    if (selectedType) {
      return [...currentMenuPage].sort((a, b) =>
        a[selectedType.type].localeCompare(b[selectedType.type])
      );
    }
    return currentMenuPage;
  }, [selectedType, currentMenuPage]);

  const sortedSearchedData = useMemo(() => {
    return sortedData.filter((el) =>
      el.name.toLowerCase().includes(searchQuary)
    );
  }, [searchQuary, sortedData]);

  const onSortData = (type) => {
    setSelectedType(type);

    setDb(sortedData);
  };

  return (
    <div className="wrapper">
      <main>
        <section className="about d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <Categories db={db} setDb={setDb} />
            <Sort sortTypes={sortTypes} onSortData={onSortData} />

            <div className="search d-flex">
              <input
                type="text"
                placeholder="Начать поиск"
                value={searchQuary}
                onChange={(e) => setSearchQuary(e.target.value)}
              />
              <img src={SearchNormal1} alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              {sortedSearchedData.map((el) => (
                <Card
                  onModalClick={onModalClick}
                  onAddData={onAddData}
                  key={el.id}
                  modalId={modalId}
                  setModalId={el}
                  activeModal={activeModal}
                  setActiveModal={setActiveModal}
                  item={el}
                  index={el.id}
                  {...el}
                />
              ))}
            </div>
            <Pagination
              setCurrentPage={setCurrentPage}
              prevPage={prevPage}
              totalPages={db.length}
            />

            <Modal
              onAddData={onAddData}
              modalId={modalId}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export default OurMenuPage;
