import React from 'react'
import Useform from '../hooks/useform';
import Validate from '../validate';
import '../components/form.css';



const Formsignup = () => {
  const {handlechange,values,Handlesubmit,errors}= Useform(Validate);
  
  return (
    <div className='formcontent-right'>
      <form className='form' onSubmit={Handlesubmit}>
       <h1>Create Account</h1>
       <div className='form-inputs'>
       
       <input type="text" 
       id='username'
       name='username' 
       className='form-input'
       placeholder='enter your name'
       value={values.username}
       onChange={handlechange}/>
       {errors.username && <p>{errors.username}</p>} 
       </div>
       <div className='form-inputs'>
    
       <input type="email" 
       id='email'
       name='email' 
       className='form-input'
       placeholder='enter your email'
       value={values.email}
       onChange={handlechange}/>
       {errors.email && <p>{errors.email}</p>} 
       </div>
       <div className='form-inputs'>
      
       <input type="password" 
       id='password'
       name='password' 
       className='form-input'
       placeholder='enter password'
       value={values.password}
       onChange={handlechange}/>
       {errors.password && <p>{errors.password}</p>} 
       </div>
       <div className='form-inputs'>
       
       <input type="password"
       id='password2'
       name='password2' 
       className='form-input'
       placeholder='re-enter password'
       value={values.password2}
       onChange={handlechange}/>
       {errors.password2 && <p>{errors.password2}</p>} 
       </div>
       <div className='button-log'>
       <button className='form-input-btn' type='submit'>sign up</button>
       <span className='form-input-login'>
        already have an Account? <a href='#'>login here</a>
       </span>
       </div>
      </form>
    </div>
  )
}

export default Formsignup;
