import { Link } from 'react-router-dom';
import "./ItemList.css";

const categoryTranslations = {
  electronics: "Electrónica",
  jewelery: "Joyería",
  "men's clothing": "Ropa hombre",
  "women's clothing": "Ropa mujer",
};

const ItemList = ({ products }) => {
  return (
    <div className="row g-3">
      {products.map(prod => (
        <div className="col-sm-6 col-md-4" key={prod.id}>
          <div className="card h-100">
            {prod.image && (
              <img
                src={prod.image}
                alt={prod.title}
                className="card-img-top"
                style={{ objectFit: 'contain', height: '200px' }}
              />
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text mb-2">Precio: ${prod.price}</p>
              <p className="text-muted mb-3"> {categoryTranslations[prod.category] || prod.category}</p>
              <Link to={`/item/${prod.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;