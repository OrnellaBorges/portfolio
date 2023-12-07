import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

import "./invest.css";

function InvestCalculator() {
    // on déplace l'etat dans le parent qui etait au départ dans l'enfant
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    //on deplace la fonction qui met a jour l'etat de manière immuable dans le parent App
    //Cette function est passé en prop pour l'utiliser dans l'enfant UserInput via la prop onChange qui est reçu par detructuration dans le composant UserInput
    function handleChange(inputIndentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIndentifier]: +newValue,
            };
        });
    }

    return (
        <section className="mini-projets">
            <Header />;
            <UserInput userInput={userInput} onChange={handleChange} />{" "}
            {/*on a passé la function en prop*/}
            <Results input={userInput} />
            {/*Results go here */}
        </section>
    );
}

export default InvestCalculator;
