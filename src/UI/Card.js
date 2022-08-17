import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="menu-container">
        <div className="menu">
          <div className="title-container">
            <h1 className="title">
              <br></br>
              Cocktail
              <span> Menu</span>
            </h1>

            <h4 className="subhead">Random Cocktail Generator</h4>
          </div>
          <div className="buttons">
            <button className="previous" onClick={props.previous}>
              →
            </button>
            <button className="generate" onClick={props.clickHandler}>
              Generate
            </button>
            <button className="next" onClick={props.next}>
              →
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Card;
