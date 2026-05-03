import "./AnimeCard.css";
import { useNavigate } from "react-router";
function AnimeCard({id,title,genre,rating,image}){
  const navigate=useNavigate();
  return(
     <div className="card">
        <img src={image} alt={title}/>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{genre}</p>
          <span>⭐{rating}</span>


        </div>
    </div>
   
  );
}
export default AnimeCard;