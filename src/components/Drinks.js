import { useState, useEffect } from "react";
import RenderDrink from "./RenderDrink";
import Card from "../UI/Card";

const getDrink = async () => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  const data = await res.json();

  return data.drinks[0];
};

const Drinks = () => {
  //console.log(props.allDrinks);
  const [drink, setDrink] = useState();
  const [ingredient, setIngredient] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
  const [current, setCurrent] = useState(null);

  const storeDrinksHandler = (drink) => {
    if (!drink) return;
    setAllDrinks((prevDrinks) => {
      return [...prevDrinks, drink];
    });
  };

  useEffect(() => {
    storeDrinksHandler(drink);
  }, [drink]);

  const getIngredients = (drink) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (drink[`strIngredient${i}`])
        ingredients.push(
          `${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`
        );
    }
    setIngredient(ingredients);
  };

  const clickHandler = () => {
    getDrink().then((res) => {
      getIngredients(res);
      setDrink(res);
      setCurrent(allDrinks.length);
    });
  };

  const next = () => {
    if (current === allDrinks.length - 1) {
      setCurrent(0);
      getIngredients(allDrinks[0]);
    } else {
      setCurrent(current + 1);
      getIngredients(allDrinks[current + 1]);
    }
  };

  const previous = () => {
    if (current === 0) {
      setCurrent(allDrinks.length - 1);
      getIngredients(allDrinks[allDrinks.length - 1]);
    } else {
      setCurrent(current - 1);
      getIngredients(allDrinks[current - 1]);
    }
  };

  if (!drink)
    return (
      <>
        <Card
          previous={previous}
          next={next}
          clickHandler={clickHandler}
        ></Card>
      </>
    );

  return (
    <>
      <Card previous={previous} next={next} clickHandler={clickHandler}>
        <RenderDrink drink={allDrinks[current]} ingredient={ingredient} />
      </Card>
    </>
  );
};

export default Drinks;
