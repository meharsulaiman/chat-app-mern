import BlurryContainer from '../../components/BlurryContainer';
import BrandHeading from '../../components/BrandHeading';
import Button from '../../components/Button';
import Container from '../../components/Container';
import GenderCheckbox from '../../components/GenderCheckbox';
import Input from '../../components/Input';

const Signup = () => {
  return (
    <Container>
      <BlurryContainer>
        <BrandHeading span1={'Signup'} span2={'ChatApp'} />
        {/* FORM */}
        <form>
          {/* FULLNAME FIELD */}
          <Input
            type={'text'}
            id={'fullname'}
            label={'Full Name'}
            placeHolder={''}
          />

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

          {/* CONFIRM PASSWORD FIELD */}
          <Input
            type={'password'}
            id={'cpassword'}
            label={'Confirm Password'}
            placeHolder={'Enter password again'}
          />

          {/* GENDER SELECTION */}
          <GenderCheckbox />

          {/* ALREADY HAVE AN ACCOUNT */}
          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition'
          >
            Already have an account?
          </a>

          {/* SUBMIT BUTTON */}
          <Button>Login</Button>
        </form>
      </BlurryContainer>
    </Container>
  );
};

export default Signup;
