import About from './about/About'
import OftenOrder from './about/oftenOrder/OftenOrder'
import Hero from './hero/Hero'
import Slide from './slider/Slide'
const Main = ({db, setDb, onAddData}) =>{
    return(
        <main>
        <About/>
        <Slide/>
        <Hero/>
        <OftenOrder db={db} setDb={setDb} onAddData={onAddData}/>
      </main>
    )
}

export default Main