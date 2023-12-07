import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <header id="header" className="invest-header">
            <img src={logo} alt="logo showing a money bag with dollar" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}
