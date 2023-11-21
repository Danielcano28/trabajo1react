import "./styles/QuoteBox.css";
import { IconPlanet } from "@tabler/icons-react";
import Planets from "./Planets";

const QuoteBox = ({ quote, handleChangeQuote, planet }) => {
  return (
    <article className="quotebox">
      <h1 className="quoterbox__title">INFOGALAX</h1>
      <div className="quoterbox__box">
        <p>{quote.phrase}</p>
      </div>
      <button className="quoterbox__btn" onClick={handleChangeQuote}>
        {" "}
        <IconPlanet />
      </button>
      <span className="quoterbox__author">{quote.author}</span>
      <Planets planet={planet} />
    </article>
  );
};
export default QuoteBox;
