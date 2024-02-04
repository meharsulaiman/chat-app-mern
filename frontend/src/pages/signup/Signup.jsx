import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import BlurryContainer from '../../components/BlurryContainer';
import BrandHeading from '../../components/BrandHeading';
import Button from '../../components/Button';
import Container from '../../components/Container';
import GenderCheckbox from '../../components/GenderCheckbox';
import Input from '../../components/Input';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [loading, signup] = useSignup();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
    },
  });

  const submitHandler = async (data) => {
    await signup(data);
  };

  return (
    <Container>
      <BlurryContainer>
        <BrandHeading span1={'Signup'} span2={'ChatApp'} />
        {/* FORM */}
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* FULLNAME FIELD */}
          <Input
            type={'text'}
            id={'fullName'}
            label={'Full Name'}
            placeHolder={'Full name'}
            register={register}
            errors={errors}
          />

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

          {/* CONFIRM PASSWORD FIELD */}
          <Input
            type={'password'}
            id={'confirmPassword'}
            label={'Confirm Password'}
            placeHolder={'Enter password again'}
            register={register}
            errors={errors}
          />

          {/* GENDER SELECTION */}
          <GenderCheckbox
            id={'gender'}
            register={register}
            watch={watch}
            errors={errors}
          />

          {/* ALREADY HAVE AN ACCOUNT */}
          <Link
            to={'/login'}
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition'
          >
            Already have an account?
          </Link>

          {/* SUBMIT BUTTON */}
          <Button disabled={loading}>Signup</Button>
        </form>
      </BlurryContainer>
    </Container>
  );
};

export default Signup;
