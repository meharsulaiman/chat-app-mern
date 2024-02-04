const GenderCheckbox = ({ register, watch, errors }) => {
  return (
    <div className='flex items-center'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='gender'
            value='male'
            className='radio checked:bg-blue-500 border-slate-900'
            {...register('gender', { required: `gender field is required` })}
            defaultChecked={watch('gender') === 'male'}
          />
        </label>
      </div>

      <div className='form-control'>
        <label className='label gap-2 '>
          <span className='label-text'>Female</span>
          <input
            type='radio'
            name='gender'
            value='female'
            className='radio checked:bg-blue-500 border-slate-900'
            {...register('gender')}
            defaultChecked={watch('gender') === 'female'}
          />
        </label>
      </div>

      {errors['gender'] && (
        <span className='text-red-500 text-xs'>{errors['gender'].message}</span>
      )}
    </div>
  );
};

export default GenderCheckbox;
