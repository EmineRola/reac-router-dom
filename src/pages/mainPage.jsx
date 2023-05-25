import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Merhaba sayfamıza hoşgeldiniz</h1>

      <h1>
        <Link to={"/books"}>ürünlerimize bir göz atın</Link>
      </h1>
    </div>
  );
};
export default MainPage;
