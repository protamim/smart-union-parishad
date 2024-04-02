import HomePage from "../pages/HomePage";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <nav>
        <Navbar />
      </nav>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
