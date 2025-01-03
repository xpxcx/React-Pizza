import React from "react";
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

export const Pagination = ({currentPage, onChangePage})    =>  {
    return  (

        <ReactPaginate className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
        />
    );
}