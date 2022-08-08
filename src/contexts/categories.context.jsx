import { createContext, useEffect, useState } from "react";
import {getCollectionAndDoucment } from "../utils/firebase/firebase.utils.js";
 
export const CategoriesContext = createContext({
    categoriesMap: []
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    useEffect(()=>{
       const getData = async() => {
          const categoryMap = await getCollectionAndDoucment('Categories');
          setCategoriesMap(categoryMap);
        } 
      getData();
    },[]);
    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}

