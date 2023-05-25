import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  //use params > annlık olarak urldeki parametrleri alır ve bir obje olarak döndürürür
  const [bookData, setBookData] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios

      // urldeki parametreyle beraber api isteği yaptık
      // ve gelen cevabı state aktardık
      .get(`http://localhost:3030/books/${params.bookId}`)
      .then((res) => setBookData(res.data));
  }, []);
  //use params> anlık olarak url deki parametreler, alır ve bir obje olarak döndürmek ister.

  if (!bookData) return "Yükleniyor...";
  console.log(bookData);
  return (
    <div className="detail-page">
      <div className="book-detail">
        <img className="image" src={bookData.image} />
        <div className="right">
          <h1>{bookData.title}</h1>
          <h2>Yazarı{bookData.author}</h2>
          <p>Yıl:{bookData.year}</p>
          <p>Açıklama:{bookData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
