import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <button className="header-title">_techlog</button>
      <div className="header-empty" />
      <button className="header-category">edit</button>
      <button className="header-category">write</button>
      <button className="header-category">about</button>
    </div>
  );
};
export default Header;
