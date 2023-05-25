import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/mainPage";
import ProductsPage from "./pages/productsPage";
import BookDetail from "./pages/bookDetail";
import UndefinedPage from "./pages/undefined";
import AnaSayfa from "./deneme/anasayfa";
import Layout from "./deneme/dizayn";
import Mercedes from "./deneme/mercedes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<ProductsPage />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
          {/* sürekli değişen sayfaya :bookId diye ad verdik */}
          <Route path="*" element={<UndefinedPage />} />
          {/* tanımlanmayan route */}

          {/* nested > iç içe routelar */}
          <Route path="/arabalar" element={<Layout />}>
            <Route index={true} element={<AnaSayfa />} />
            <Route path="mercedes" element={<Mercedes />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
