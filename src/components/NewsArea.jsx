import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import NewsItems from "./NewsItems";

const NewsArea = ({ category, setLoading }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, [category, setLoading]);

  return (
    <div className="text-center">
      <h2 className="text-center items-center pt-5 pb-5">
        <span className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Latest News
        </span>
      </h2>
      {articles.map((news, index) => (
        <NewsItems
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

NewsArea.propTypes = {
  category: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default NewsArea;
