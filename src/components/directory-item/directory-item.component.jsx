import { Link } from 'react-router-dom';
import {DirectoryItemContainer, DirectoryBodyContainer, BackgroundImage} from  './directory-item.styles.jsx'


const DirectoryItem = ({category}) => {
    const {title, imageUrl}= category;
    return( 
        <DirectoryItemContainer>
            <BackgroundImage url={imageUrl}></BackgroundImage>
                <DirectoryBodyContainer>
                <Link to={`shop/${title}`}>
                    <h2>{title}</h2>
                    <p>Shop now</p>
                </Link>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
  )
}

export default DirectoryItem;