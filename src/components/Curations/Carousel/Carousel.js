import styles from './Carousel.css'
import ContentCard from '../ContentCard/ContentCard'


export default function Carousel({ contents }) {

    return (
        <div className="carousel-container">
            {contents.map((content) => (
                <ContentCard content={content}/>
            ))}
        </div>
        
    )
}


