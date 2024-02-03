const Button = ({ children }) => {
  return (
    <div>
      <button className='btn btn-block btn-sm mt-2'>{children}</button>
    </div>
  );
};

export default Button;
