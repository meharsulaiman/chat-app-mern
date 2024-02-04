const Input = ({ label, placeHolder, id, type, register, errors }) => {
  return (
    <div>
      <label className='label p-2' htmlFor={id}>
        <span className='label-text text-base'>{label}</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeHolder}
        className='w-full input input-bordered h-10'
        {...register(id, { required: `${id} field is required` })}
      />
      {errors[id] && (
        <span className='text-red-500 text-xs'>{errors[id].message}</span>
      )}
    </div>
  );
};

export default Input;
