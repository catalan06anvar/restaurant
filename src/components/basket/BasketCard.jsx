import { ButtonCircleSvg } from "../common/svg/ButtonCircleSvg.jsx";
import { CardMinus, CardMinusSvg } from "../common/svg/CardMinusSvg.jsx";
import { CardPlus, CardPlusSvg } from "../common/svg/CardPlusSvg";

const BasketCard = ({
  totalPrice,
  totalCount,
  el,
  item,
  id,
  name,
  price,
  modalImg,
  onAddData,
  onDeleteData,
}) => {
  return (
    <div key={id} className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={() => onDeleteData(item)}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <CardMinusSvg />
        </div>
        <b>{totalCount}</b>
        <div
          onClick={() => onAddData(item)}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <CardPlusSvg />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{item.price * totalCount}сом</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle">
          <ButtonCircleSvg />
        </div>
      </div>
    </div>
  );
};
export default BasketCard;
