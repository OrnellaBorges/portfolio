import Input from "./Input.jsx";
import { useState } from "react";
import { FORMFIELD_RAW } from "../data/data.js"; // on import les data pour remplir les champs de for
import { groupEvenElements } from "../util/groupEvenElements.js"; // creation d'une fonction qui permet de creer la data qu'on veut en mode groupe pair

export default function UserInput({ onChange, userInput }) {
    /*   const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
 */
    //const FORMFIELD = groupEvenElements(FORMFIELD_RAW); // on passe la data dans la moulinette pour la transformer comme on veut

    // cette fonction permet de taper dans l'input et mettre a jour les valeurs du state
    // C4EST UNE FONCTION GENERIQUE elle permet de recolter touts les identifiants des input et de les conecter avec leur valeur respective
    //au lieu de faire 4 fonction distinct

    // cette fonction a besoin d'une nouvelle valeur qui aura été tapé dans les champs et d'un identifiant pour reconnaire

    /*    function handleChange(inputIndentifier, newValue) {
        //console.log("inputIndentifier", inputIndentifier);
        //console.log("value", value);
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIndentifier]: newValue,
            };
        });
    } */

    // ...

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial">Initial investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        required
                        onChange={(event) =>
                            onChange("initialInvestment", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="annual">Annual investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            onChange("annualInvestment", event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected">Expected return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        required
                        onChange={(event) =>
                            onChange("expectedReturn", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        required
                        onChange={(event) =>
                            onChange("duration", event.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
}
