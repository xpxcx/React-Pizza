import React from "react";

function Categories({ categoryID, onChangeCategory }) {
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль','Острые','Закрытые']
    return (
      <div className="categories">
        <ul>
          {
            categories.map((Value, i) => (
              <li 
                key={i} 
                className={categoryID === i ? 'active' : ''} 
                onClick={()=> onChangeCategory(i)}>
                {Value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  export default Categories;