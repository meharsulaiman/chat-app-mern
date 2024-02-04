const Avatar = ({ img, status }) => {
  return (
    <div className={`avatar ${status}`}>
      <div className='w-12 rounded-full'>
        <img src={img} />
      </div>
    </div>
  );
};

export default Avatar;
