import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/common/ItemDetail/ItemDetail';
import Spinner from '../../components/common/Spinner/Spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('loading');

  const fetchProduct = () => {
    setStatus('loading');
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
    };

    useEffect(() => {
    fetchProduct();
  }, [id]);

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return (
    <div className="text-center py-5">
        <p>Error al cargar el producto.</p>
        <button className="btn btn-danger" onClick={fetchProduct}>
          Reintentar
        </button>
      </div>
  );

  return product ? <ItemDetail product={product} /> : null;
};

export default ItemDetailContainer;