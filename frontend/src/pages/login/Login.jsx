import BrandHeading from '../../components/BrandHeading';
import Button from '../../components/Button';
import Input from '../../components/Input';
import BlurryContainer from '../../components/BlurryContainer';
import Container from '../../components/Container';

const Login = () => {
  return (
    <Container>
      <BlurryContainer>
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
      </BlurryContainer>
    </Container>
  );
};

export default Login;
