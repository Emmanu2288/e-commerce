import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      <div className="row g-3">
        {products.map((prod) => (
          <div className="col-sm-6 col-md-4" key={prod.id}>
            <div className="card h-100">
              {prod.image && (
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="card-img-top product-img"
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text mb-2">Precio: ${prod.price}</p>
                <p className="text-muted mb-3">{prod.category}</p>
                <Link
                  to={`/item/${prod.id}`}
                  className="btn-cta btn-darkblue mt-auto"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;