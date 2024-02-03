const BrandHeading = ({ span1, span2 }) => {
  return (
    <h1 className='text-3xl font-semibold text-center to-gray-400'>
      <span>{span1} </span>
      <span className='text-blue-500'>{span2}</span>
    </h1>
  );
};

export default BrandHeading;
