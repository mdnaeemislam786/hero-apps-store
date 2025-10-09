const LoadingSpiner = () => {
  return (
    <div className="flex justify-center items-center my-20">
        <span className="text-3xl font-bold text-blue-500">loading..</span>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500">
        
      </div>
    </div>
  );
};

export default LoadingSpiner;