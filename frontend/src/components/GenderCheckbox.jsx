const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='gender'
            value='male'
            className='radio checked:bg-blue-500 border-slate-900'
            checked
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
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
