import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";

const bgs = ["bg1", "bg2", "bg3", "bg4"];
const planets = ["planeta1", "planeta2", "planeta3", "planeta4"];

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currenBg, setCurrenBg] = useState(getRandomElement(bgs));
  const [planet, setPlanet] = useState(getRandomElement(planets));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrenBg(getRandomElement(bgs));
    setPlanet(getRandomElement(planets));
  };

  return (
    <main className={`App ${currenBg} `}>
      <QuoteBox
        quote={quote}
        handleChangeQuote={handleChangeQuote}
        planet={planet}
      />
    </main>
  );
}

export default App;
