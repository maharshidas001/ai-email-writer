import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from 'react';

const CreateEmail = () => {

  const [createEmailData, setCreateEmailData] = useState({
    aboutEmail: '',
    tone: ''
  });

  let toneOptions = [
    { tone: 'friendly' },
    { tone: 'professional' },
    { tone: 'casual' },
    { tone: 'funny' },
    { tone: 'serious' },
  ];

  const handleInputChange = (name, value) => {
    setCreateEmailData({
      ...createEmailData,
      [name]: value,
    });
  };

  const checkFormValidation = () => {
    if (createEmailData?.aboutEmail?.trim() !== '' && createEmailData?.tone?.trim() !== '') {
      return true;
    } else return false;
  };

  const handleLoginForm = (e) => {
    e.preventDefault();

    let isValidate = checkFormValidation(); // true / false
    console.log(isValidate);
  };

  return (
    <>
      <div className='w-full border rounded-xl p-2'>
        <h2 className='text-2xl font-bold text-center mt-6'>Create Email using AI</h2>
        <form className='mt-10' onSubmit={handleLoginForm} name='createEmailForm'>
          <div>
            <label htmlFor='aboutEmail'>What is your email about?</label>
            <Textarea placeholder='Ex: Product Recomendation...' id='aboutEmail' className='mt-2 resize-none' onChange={(e) => handleInputChange('aboutEmail', e.target.value)} />
          </div>
          <div className='mt-2'>
            <label htmlFor='selectTone'>Select Tone</label>
            <Select onValueChange={(value) => handleInputChange('tone', value)}>
              <SelectTrigger id='selectTone' className='w-full mt-2 capitalize'>
                <SelectValue placeholder='Select Tone' />
              </SelectTrigger>
              <SelectContent>
                {toneOptions.map((option, index) => {
                  return <SelectItem key={index} value={option.tone} className='capitalize'>
                    {option.tone}
                  </SelectItem>
                })}
              </SelectContent>
            </Select>
          </div>
          <div className='w-full flex justify-center mt-4'>
            <Button type='submit'>Generate Email</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateEmail;