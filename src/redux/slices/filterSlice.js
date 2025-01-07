import { createSlice } from "@reduxjs/toolkit";

const initialState  =  {
    categoryID: 0,
    sort: {
        name: 'популярности', 
        sortProperty: 'rating',
      },
    currentPage: 1,
    searchValue: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:   {
        setCategoryID(state, action) {
            state.categoryID = action.payload;
        },
        setSortType(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }, 
        setFilters(state, action)   {
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
            state.categoryID = Number(action.payload.categoryID);
        }
    }
});

export const { setCategoryID, setSortType, setCurrentPage, setSearchValue, setFilters } = filterSlice.actions;

export default filterSlice.reducer;