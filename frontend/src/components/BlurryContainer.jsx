const BlurryContainer = ({ children }) => {
  return (
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      {children}
    </div>
  );
};

export default BlurryContainer;
