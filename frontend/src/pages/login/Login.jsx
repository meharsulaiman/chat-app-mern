import BrandHeading from '../../components/BrandHeading';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <BrandHeading span1={'Login'} span2={'ChatApp'} />
        {/* FORM */}
        <form>
          {/* USERNAME FIELD */}
          <Input
            type={'text'}
            id={'username'}
            label={'Username'}
            placeHolder={'Enter username'}
          />

          {/* PASSWORD FIELD */}
          <Input
            type={'password'}
            id={'password'}
            label={'Password'}
            placeHolder={'Enter password'}
          />

          {/* DON'T HAVE AN ACCOUNT */}
          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition'
          >
            {"Don't"} have an account?
          </a>

          {/* SUBMIT BUTTON */}
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
