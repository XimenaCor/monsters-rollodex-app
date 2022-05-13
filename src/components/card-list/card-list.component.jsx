import Card from "../card/card.component";
import './card-list.styles.css';


//implicit return because we dont have anything else to return than the div (if we had other functions or things like that we need the return)
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return (
        <Card monster={monster} key={monster.id}/>
      )
    })}
  </div>
);

export default CardList;
