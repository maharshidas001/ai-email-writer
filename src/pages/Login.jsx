import MaxWidth from '@/components/MaxWidth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState([]);

  const handleInputChange = (name, value) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const checkFormValidation = () => {
    if (loginData.email.trim() !== '' && loginData.password.trim() !== '') {
      return true;
    } else return false;
  };

  const handleLoginForm = (e) => {
    e.preventDefault();

    let isValidate = checkFormValidation(); // true / false
  };

  return (
    <>
      <section>
        <MaxWidth className='flex justify-between py-2'>
          <div className='w-[45%]' style={{
            height: 'calc(100vh - 16px)'
          }}>Left</div>
          <div className='w-[45%] grid place-items-center' style={{
            height: 'calc(100vh - 16px)'
          }}>
            <form className='w-full' onSubmit={handleLoginForm}>
              <h2 className='text-3xl font-bold'>Welcome Back 🙏</h2>
              <div className='mt-4'>
                <label htmlFor="">Email</label>
                <Input type='email' placeholder='example@mymail.com' className='w-full max-w-96' onChange={(e) => handleInputChange('email', e.target.value)} />
              </div>
              <div className='mt-2'>
                <label>Password</label>
                <div className='flex gap-2'>
                  <Input type={showPassword ? 'text' : 'password'} placeholder='**********' className='w-full max-w-96' onChange={(e) => handleInputChange('password', e.target.value)} />
                  <Button variant='outline' onClick={() => setShowPassword(!showPassword)}>
                    {
                      !showPassword ? <Eye /> : <EyeClosed />
                    }
                  </Button>
                </div>
              </div>
              <div className='mt-4'>
                <Button>Login</Button>
              </div>
              <p className='mt-6'>Didn't have an account. <Link to='/signup' className='text-primary underline'>Signup</Link></p>
            </form>
          </div>
        </MaxWidth>
      </section>
    </>
  )
}

export default Login;