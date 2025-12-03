import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/common/ItemList/ItemList';
import Spinner from '../../components/common/Spinner/Spinner';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  const fetchProducts = () => {
    setStatus('loading');
    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : `https://fakestoreapi.com/products`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  if (status === 'loading') return <Spinner />;
  if (status === 'error')
    return (
      <div className="text-center py-5">
        <p>Error al cargar productos.</p>
        <button className="btn btn-danger" onClick={fetchProducts}>
          Reintentar
        </button>
      </div>
    );

  return <ItemList products={products} />;
};

export default ItemListContainer;