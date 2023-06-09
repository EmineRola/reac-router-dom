import { useNavigate } from "react-router-dom";

const ProductCard = ({ book }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/books/${book.id}`);
  };

  // console.log(book);

  return (
    <div className="card" onClick={handleClick}>
      <img src={book.image} />
      <div className="card-body">
        <h4>{book.title}</h4>
        <p>Yazar:{book.author}</p>
      </div>
    </div>
  );
};

export default ProductCard;
