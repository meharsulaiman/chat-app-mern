const Button = ({ children, disabled }) => {
  return (
    <div>
      <button
        className='btn btn-block btn-sm mt-2'
        type='submit'
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
