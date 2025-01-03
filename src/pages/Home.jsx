import React from "react";
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../App";
export const Home = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [pizzaItem, setPizzaItem] = React.useState([]);
    const [categoryID, setCategoryID] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
      name: 'популярности', 
      sortProperty: 'rating'
    });
    const {searchValue} = React.useContext(SearchContext);

      React.useEffect(() => {
        async function fetchData() {
          setIsLoading(true); 
          const pizzaData = await axios.get(`http://localhost:3000/pizzas`, {params: {
            ...(categoryID === 0 ? {} : {category: categoryID}),
            _sort: sortType.sortProperty,
         
          }});
          
          setPizzaItem(pizzaData.data);

          setIsLoading(false);
        }
        fetchData();
        window.scrollTo(0,0);
      }, [categoryID, sortType]);
      const pizzas = pizzaItem.filter((obj)  => 
      {
        if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
        }).map((obj) => (
        <PizzaBlock  
        key={obj.id}
        {...obj}  
        />
      ));
      const skeletons = [...Array(10)].map((_, index) => <Skeleton key={index}/>)
    return  (
      <div className="container">
        <div className="content__top">
            <Categories 
              categoryID={categoryID}
              onChangeCategory={(id) => setCategoryID(id)}
            />
            <Sort  
              sortType={sortType}
              onChangeSortType={(id) => setSortType(id)}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ? skeletons
              :
              pizzas
            }
            
          </div>
          <Pagination
          currentPage={currentPage}
          onChangePage={number => setCurrentPage(number)}
          />
          </div>

    );
}