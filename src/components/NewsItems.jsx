import PropTypes from 'prop-types';
import image from '../assets/News/breaking-news.jpg';

const NewsItems = ({ title, description, src, url }) => {

  return (
    <div className="mb-3 inline-block my-3 mx-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="size-full rounded-t-lg" src={src?src:image} alt="News Image" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title.slice(0,50)}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description?description.slice(0,90):"Breaking News: Right now, to know more about this news, click on Read More"}</p>
        <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItems;
