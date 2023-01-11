import "bulma/css/bulma.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

const App = () => {
  return (
    <div>
      <Hero />
      <BookList />
      <BookCreate />
      <Footer />
    </div>
  );
};

export default App;
