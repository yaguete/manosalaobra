import './Equipo.css'
import '../StoryCard/StoryCard.css'
import StoryCard from '../StoryCard/StoryCard';

function Equipo( {equipo, index} ) {
    
    return (
        <div className="equipo">
            {equipo.map((equipo, index) => 
            (<div className='equipo' key={index}>
                    <StoryCard 
                    imageUrl={equipo.imageUrl}
                    title={equipo.title}
                    text={equipo.text}
                    />
                </div>
            ))}
            </div>
            )


}

export default Equipo;