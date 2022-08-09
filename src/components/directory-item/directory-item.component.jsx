import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'


const DirectoryItem = ({category}) => {
    const {title, imageUrl}= category;
    const onNavigateHandler = () => navigate(route);
    return( 
        <div className='directory-item-container'>
            <div className='background-image' style={{ backgroundImage:`url(${imageUrl})`}}></div>
                <div className='directory-body-container'>
                <Link to={`shop/${title}`}>
                    <h2>{title}</h2>
                    <p>Shop now</p>
                </Link>
            </div>
        </div>
  )
}

export default DirectoryItem;