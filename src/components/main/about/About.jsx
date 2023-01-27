import { Link } from "react-router-dom"

const About = () => {
    return(
        <section class="about d-flex">
          <span class="about-greeting">Welcome to The Restaurant </span>
          <div class="about-greeting_links d-flex">
            <Link to="/aboutUs"><span class="button button--cart d-flex">О НАС</span></Link>
            <Link to="/menu"> <span class="button button--cart d-flex">СДЕЛАТЬ ЗАКАЗ</span></Link>
          </div>
        </section>
    )
}

export default About