import NavBar from '../components/NavBar/NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className='container py-4'>{children}</main>
  </>
);

export default Layout;