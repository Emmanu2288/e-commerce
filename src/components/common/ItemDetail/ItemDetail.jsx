import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
  return (
    <div className="row">
      <div className="col-md-5">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ objectFit: 'contain', maxHeight: '420px' }}
          />
        )}
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <p>{product.description}</p>
        <h4 className="mb-3">Precio: ${product.price}</h4>
        <ItemCount onAdd={(qty) => alert(`Agregaste ${qty} unidades de "${product.title}"`)} />
      </div>
    </div>
  );
};
export default ItemDetail;