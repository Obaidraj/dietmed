import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import InputField from './../../components/common/InputField';
import Button from '../../components/common/Button';

const Forget = () => {
  return (
    <AuthLayout>
        <div className='text-2xl py-2 font-bold'>Forget Password</div>
        <InputField type='email' placeholder='Enter Your E-mail Address' label={"Please Enter Your Email Address"} className='w-[50%]'/>
        <Button className='w-[50%] my-2'>Submit</Button>
    </AuthLayout>
  )
}

export default Forget