import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {

    return ( 
        <div className='shop-container'>
            <Routes>
                <Route index element={<CategoriesPreview/>}></Route>
                <Route path=':category' element={<Category/>}></Route>
            </Routes>
        </div>
    )
  }
  
  export default Shop;