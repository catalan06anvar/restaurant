export const Card = ({ item, onModalClick }) => {
  return (
    <>
      <div
        onClick={() => onModalClick(item)}
        key={item.id}
        class="often-order__card d-flex"
      >
        <div class="d-flex">
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
    </>
  );
};
