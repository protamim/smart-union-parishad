import HomePage from "../pages/HomePage";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
