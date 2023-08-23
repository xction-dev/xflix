import './DashboardContainer.css'
import curationsData from '/src/mock/curations.json'
import Carousel from '../Carousel/Carousel'

export default function DashboardContainer() {
    return (
        <div className="dashboard-container">
            {curationsData.map((curation) => (
                <div className="curation-container" key={curation.id}>
                    <h3 className="curation-title">{curation.title}</h3>
                    <Carousel contents={curation.contents}/>
                </div>
            ))}
        </div>
    )
}
