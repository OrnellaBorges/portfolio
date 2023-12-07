import { calculateInvestmentResults, formatter } from "../util/investment.js";

// le composant result doit obtenir les données d'entrée via la props input
export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input); // on passe dans la moulinette les data dont a besoin la fonction
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    //console.log("input prop", input);
    //console.log("resultsData", resultsData);
    return (
        <table id="result">
            <p>Results...</p>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                    const totalAmountInvested =
                        yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <th>{yearData.year}</th>
                            <th>{formatter.format(yearData.valueEndOfYear)}</th>
                            <th>{formatter.format(yearData.interest)}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{formatter.format(totalAmountInvested)}</th>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
