import headerImg from "../../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>Investment Calculator</h1>
    </header>
  );
}