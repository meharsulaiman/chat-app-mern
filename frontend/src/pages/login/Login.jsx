import BrandHeading from '../../components/BrandHeading';
import Button from '../../components/Button';
import Input from '../../components/Input';
import BlurryContainer from '../../components/BlurryContainer';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [laoding, signin] = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const submitHandler = async (data) => {
    await signin(data);
  };

  return (
    <Container>
      <BlurryContainer>
        <BrandHeading span1={'Login'} span2={'ChatApp'} />
        {/* FORM */}
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* USERNAME FIELD */}
          <Input
            type={'text'}
            id={'username'}
            label={'Username'}
            placeHolder={'Enter username'}
            register={register}
            errors={errors}
          />

          {/* PASSWORD FIELD */}
          <Input
            type={'password'}
            id={'password'}
            label={'Password'}
            placeHolder={'Enter password'}
            register={register}
            errors={errors}
          />

          {/* DON'T HAVE AN ACCOUNT */}
          <Link
            to={'/signup'}
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition'
          >
            {"Don't"} have an account?
          </Link>

          {/* SUBMIT BUTTON */}
          <Button disabled={laoding}>Login</Button>
        </form>
      </BlurryContainer>
    </Container>
  );
};

export default Login;
