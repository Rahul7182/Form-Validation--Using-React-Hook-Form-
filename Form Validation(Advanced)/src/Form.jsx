import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()
})

const Form = () => {
    const {register, handleSubmit, formState: {errors},reset} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitHandler = (data) => {
        console.log({ data })
        reset()
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2>Let's sign you in.</h2>
            <br />

            <div className='field'>
                <label>Username</label>
                <br />
                <input {...register('username')} type="text" 
                        placeholder='Username' required />
                <p>{errors.username?.message}</p>
                
            </div>

            <div className='field'>
                <label>Email</label>
                <br />
                <input {...register('email')} type="email" 
                        placeholder='Email' required />
                <p>{errors.email?.message}</p>
                <br />
            </div>
            
            <div className='field'>
            <label>Password</label>
                <br />
                <input {...register('password')} type="password" 
                        placeholder='Password' required />
                <p>{errors.password?.message}</p>        
                <br />
            </div>
            

            <button type='submit'>Sign in</button>
        </form>
    </>
  )
}

export default Form