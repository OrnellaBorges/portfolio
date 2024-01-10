import "./container.css";

export default function Section({ children, id }) {
    return <section id={id} className="section">{children}</section>;
}
