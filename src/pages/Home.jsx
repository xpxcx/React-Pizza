import React from "react";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton';
import { Pagination } from "../components/Pagination";
import {  setCategoryID, setCurrentPage, setFilters  } from '../redux/slices/filterSlice';

import { sortChoose } from '../components/Sort'

export const Home = () => {
    const navigate = useNavigate();
    const { sort, categoryID, currentPage, searchValue } = useSelector(state => state.filter);
    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(true);
    const [pizzaItem, setPizzaItem] = React.useState([]);
    React.useEffect(() => {
      if (window.location.search) {
        const params = qs.parse(window.location.search.substring(1));
        
        const sort = sortChoose.find(obj => obj.sortProperty === params.sortProperty);

        dispatch(
          setFilters({
            ...params,
            sort
          })
        )
      }
    }, []);
      React.useEffect(() => {
        async function fetchData() {
          setIsLoading(true); 
          const pizzaData = await axios.get(`https://677bcf6520824100c07adda1.mockapi.io/pizza`, {params: {
            limit: 4, 
            page: currentPage,
            sortBy: sort.sortProperty,
            ...(categoryID === 0 ? {} : {category: categoryID}),
            ...(searchValue === '' ? {} : {title: searchValue})
          }});
          
          setPizzaItem(pizzaData.data);
          console.log(currentPage, sort.sortProperty, categoryID, searchValue);
          setIsLoading(false);
        }

        fetchData();
        window.scrollTo(0,0);

      }, [categoryID, sort.sortProperty, currentPage, searchValue]);
      
      React.useEffect(() => {
        const queryString = qs.stringify({
          sortProperty: sort.sortProperty,
          categoryID, 
          currentPage
        });
        navigate(`?${queryString}`);
      }, [categoryID, sort.sortProperty, currentPage, navigate]);
      
      
      const pizzas = pizzaItem.map((obj) => (
        <PizzaBlock  
        key={obj.id}
        {...obj}  
        />
      ));
      const skeletons = [...Array(10)].map((_, index) => <Skeleton key={index}/>)

      const onChangeCategory = (id) => {
        dispatch(setCategoryID(id));
      };

      const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
        console.log(number);
      };
    return  (
      <div className="container">
        <div className="content__top">
            <Categories 
              categoryID={categoryID}
              onChangeCategory={(id) => onChangeCategory(id)}
            />
            <Sort />
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
          value={currentPage}
          currentPage={currentPage}
          onChangePage={(number) => onChangePage(number)}
          />
          </div>

    );
}