import "./RenderDrink.css";

const RenderDrink = (props) => {
  if (!props.drink) return;

  return (
    <>
      <div className="drinkname-section">
        <h1 className="drinkname">{props.drink.strDrink}</h1>
      </div>

      <img
        className="img-container"
        src={props.drink.strDrinkThumb}
        alt="Cocktail"
      />

      <div className="drink-info">
        <div className="ingredients-container">
          <h3 className="ingredients-title">Ingredients:</h3>
          <ul className="ingredients">
            {props.ingredient.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="instructions-container">
          <h3 className="instruction-title">Instructions:</h3>
          <p className="instructions">{props.drink.strInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default RenderDrink;
