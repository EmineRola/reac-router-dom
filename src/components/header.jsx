import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <h1 onClick={() => navigate("/")}>Kitap Dünyası</h1>
      </div>

      <div>
        <NavLink to={"/"}>Anasayfa</NavLink>
        <NavLink to={"/books"}>Kitaplar</NavLink>

        {
          /* <NavLink to="/" className={({isActive})=>is
      &&'aktif '}>Anasayfa</NavLink> react doom yüklü olmazsa bu yöntem kullanılabilir özel classismi
      vermek için*/
          // <NavLink to="/books" style={({isActive})=>(color:isActive 'blue':'red')}>Kitaplar</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
