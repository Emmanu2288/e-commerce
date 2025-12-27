import { useParams } from "react-router-dom";
import ItemList from "../../components/common/ItemList/ItemList";
import Spinner from "../../components/common/Spinner/Spinner";
import Button from "../../components/common/Button/Button";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { getAllProducts, getProductsByCategory } from "../../services/productService";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const fetchFn = () =>
    categoryId ? getProductsByCategory(categoryId) : getAllProducts();

  const { data: products, status, refetch } = useFetchProducts(fetchFn, [categoryId]);

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return (
      <div className="text-center py-5">
        <p>Error al cargar productos.</p>
        <Button variant="danger" onClick={refetch}>
          Reintentar
        </Button>
      </div>
    );

  return products ? <ItemList products={products} /> : null;
};

export default ItemListContainer;