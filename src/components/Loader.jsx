const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="loader border-t-4 border-b-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
