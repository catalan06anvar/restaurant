import React from 'react'
import './EmptyBasket.css'
import EmptyBasketIcon from '../../common/image/emptyBusketSvg.svg'

export const EmptyBasket = () => {
  return (
    <div class="wrapper">
     
      <main>
        <div class="empty-wrapper">
          <h1>Корзина пустая 😕</h1>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
            главную страницу.
          </p>
          <img src={EmptyBasketIcon} alt="" />
          <a href="./index.html">
            <button class="button button--black">Вернуться назад</button>
          </a>
        </div>
      </main>
     
    </div>
  )
}
export default EmptyBasket
