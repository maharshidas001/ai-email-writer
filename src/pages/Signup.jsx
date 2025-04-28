import MaxWidth from '@/components/MaxWidth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState([]);

  const handleInputChange = (name, value) => {
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const checkFormValidation = () => {
    if (signupData.name.trim() !== '' && signupData.email.trim() !== '' && signupData.password.trim() !== '') {
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
              <h2 className='text-3xl font-bold'>Welcome to AER. 🤩</h2>
              <div className='mt-4'>
                <label htmlFor="">Name</label>
                <Input type='text' placeholder='John Doe' className='w-full max-w-96' onChange={(e) => handleInputChange('name', e.target.value)} />
              </div>
              <div className='mt-2'>
                <label htmlFor="">Email</label>
                <Input type='email' placeholder='example@mymail.com' className='w-full max-w-96' onChange={(e) => handleInputChange('email', e.target.value)} />
              </div>
              <div className='mt-2'>
                <label htmlFor="">Password</label>
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
              <p className='mt-6'>Already have an account. <Link to='/login' className='text-primary underline'>Login</Link></p>
            </form>
          </div>
        </MaxWidth>
      </section>
    </>
  )
}

export default Signup;