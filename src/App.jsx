import Layout from './layout/Layout';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Layout>
      <ItemListContainer greeting="¡Bienvenido a MiTienda! Descubrí nuestros productos exclusivos." />
    </Layout>
  );
}

export default App;