import "../assets/styles/Header.css";
import Button from "./Button";

const Header = () => {
  const navigation = ["Home", "News", "Contact"];
  return (
    <header className="Header">
      <nav>
        <ul>
          {navigation
            ?.filter((text) => text.length > 4)
            ?.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
        </ul>
      </nav>
      {navigation
        // ?.filter((text) => text.length > 4)
        ?.map((button, i) => {
          return (
            <Button
              key={i}
              text={button}
              className={i > 1 ? "SecondaryButton" : ""}
              onClick={(e) => console.log(e.target)}
            />
          );
        })}
      <Button text="Button" disabled onClick={(e) => console.log(e.target)} />
      <Button
        onClick={(e) => console.log(e.target)}
        className="SecondaryButton"
      />
    </header>
  );
};

export default Header;
