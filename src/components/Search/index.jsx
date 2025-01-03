import React from "react";

import styles from "./Search.module.scss";

export const Search = ({ searchValue, setSearchValue }) => {
    return  (
        <div className={styles.root} >
            <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z" fill="#464646"/></svg>
            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={styles.input} placeholder="Поиск пиццы..."></input>
            {searchValue &&
            <svg className={styles.input_clear}
                onClick={() => setSearchValue('')}
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs>
                    <style>
                    {`.cls-1 {
                        fill: none;
                        stroke: #000;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 2px;
                    }`}
                    </style>
                </defs>
                <title>Close</title>
                <g id="cross">
                    <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
                    <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
                </g>
            </svg>
            }
        </div>
    );
};
