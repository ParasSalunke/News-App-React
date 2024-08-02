import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsArea from "./components/NewsArea";
import Loader from "./components/Loader";

const App = () => {
  const [category, setcategory] = useState("general");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (newCategory) => {
    setLoading(true);
    setcategory(newCategory);
  };

  return (
    <div>
      <Navbar setcategory={handleCategoryChange} />
      {loading && <Loader />}
      <NewsArea category={category} setLoading={setLoading} />
    </div>
  );
};

export default App;
