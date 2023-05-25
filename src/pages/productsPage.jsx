import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";
const ProductsPage = () => {
  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3030/books").then((res) => {
      setBookState(res.data);
    });
  }, []);
  console.log(bookState);

  // eğer apiden hala cevap gelmediyse
  //   if(!bookState) return "yükleniyor..."
  // bookState null eşitmi demek !

  if (bookState == null) return "Yükleniyor...";

  return (
    <div>
      <h1 className="productsh1">
        Ürünlerin hepsi burada yer alıyor{" "}

      </h1>
      <div className="card-container">
        {/* dizideki herbir obje için ekrana productCard basılır */}
        {bookState.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
