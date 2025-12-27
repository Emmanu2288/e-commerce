import { useParams } from "react-router-dom";
import ItemDetail from "../../components/common/ItemDetail/ItemDetail";
import Spinner from "../../components/common/Spinner/Spinner";
import Button from "../../components/common/Button/Button";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { getProductById } from "../../services/productService";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const fetchFn = () => getProductById(id);

  const { data: product, status, refetch } = useFetchProducts(fetchFn, [id]);

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return (
      <div className="text-center py-5">
        <p>Error al cargar el producto.</p>
        <Button variant="danger" onClick={refetch}>
          Reintentar
        </Button>
      </div>
    );

  return product ? <ItemDetail product={product} /> : null;
};

export default ItemDetailContainer;