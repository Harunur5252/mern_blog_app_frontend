import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SiteMobileMenu from "../components/site_mobile_menu/SiteMobileMenu";

function Layout({ children }) {
  return (
    <>
      <SiteMobileMenu />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
