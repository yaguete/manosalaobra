import './StoryCard.css';

function StoryCard({ imageUrl, title, text}) {
    return (
        <div className="StoryCard">
          <img src={imageUrl} alt={title} className="story-image" />
          <div className="story-info">
            <h3 className="story-name">{title}</h3>
            <p className="story-text">{text}</p>
          </div>
        </div>
      );
} 

export default StoryCard;

