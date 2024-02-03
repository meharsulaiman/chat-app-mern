const Input = ({ label, placeHolder, id, type }) => {
  return (
    <div>
      <label className='label p-2' htmlFor={id}>
        <span className='label-text text-base'>{label}</span>
      </label>
      <input
        id={id}
        type={type}
        autoComplete={false}
        placeholder={placeHolder}
        className='w-full input input-bordered h-10'
      />
    </div>
  );
};

export default Input;
