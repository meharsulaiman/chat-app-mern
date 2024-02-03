const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {children}
    </div>
  );
};

export default Container;
