import "./PortFolioCard.css";

export default function PortfolioCards({ src, title, status }) {
    return (
        <li id="portfoliotCards" className="portfoliotCards__container">
            <div id="img-container" className="imgContainer">
                <img src={src} alt={title} />
            </div>
            <h3>{title}</h3>
            <small>{status}</small>
        </li>
    );
}
