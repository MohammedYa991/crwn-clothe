import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import './shop.styles.scss';

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return ( 
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) =>
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                        {
                           categoriesMap[title].length >= 4 
                                ? categoriesMap[title].slice(0, 4).map((category)=>(<ProductCard key={category.id} product={category}/>))
                                : categoriesMap[title].map((category)=>(<ProductCard key={category.id} product={category}/>))
                        }
                        </div>
                    </Fragment>
                ) 
            }
        </Fragment>
    )
  }
  
  export default Shop;