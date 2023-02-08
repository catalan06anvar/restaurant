import React, { useState } from 'react'

export const Categories = ({db,setDb}) => {
    const [activeItem,setActiveItem] = useState('')
    const [categoryFilter] = useState(db)
    const availableCategories = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
    
    const onFilterData =(item) =>{
        if(item === ''){
            setDb(categoryFilter)
            return
        }
        const result = categoryFilter.filter(el=>{
           return el.category === item
        });
        setDb(result);
            
        
    } 


const onSelectCat = (index) =>{
    setActiveItem(index);
    onFilterData(index);
    console.log(index);
}

  return (
    <div className="categories">
    <ul>
      <li className={activeItem === ''? 'active': ''} onClick={()=> onSelectCat('')}>Все</li>
     {availableCategories.map((item,index) => (
           <li className={activeItem === index? 'active'  : ''} onClick={() =>onSelectCat(index)}key={item}>{item}</li>
           ))}
    </ul>
  </div>
  )
}
