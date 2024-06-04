import Footer from "../component/Footer";
import Form from "../component/Form";
import GroceryList from "../component/GroceryList";
import Header from "../component/Header";

export default function Note() {

  return (
    <>
      <div className="app">
        <Header />
        <Form />
        <GroceryList />
        <Footer />
      </div>
    </>
  );
}