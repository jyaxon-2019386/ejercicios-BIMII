import React from 'react'
import { useState } from "react";
import {validateEmail, validatePassword } from "../shared/validators/validator";
import { userLogin } from "../shared/hooks/userRegister.jsx";
import { Input } from "./Input";


export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = userLogin()
  const [formData, setFormData] = useState(
    {
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      }
    }
  )

  const isSubmitButtonDisable = !formData.email.isValid ||
                                !formData.password.isValid 

  const handleValueChange = (value, field) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }

  const handlerValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break
      case 'password':
        isValid = validatePassword(value)
        break
      default:
        break
    }

    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid
        }
      }
    ))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    login(
      formData.email.value,
      formData.password.value
    )
  }

  return (
    <div className="register-container">
      <form className="auth-form"
        onSubmit={handleLogin}
      >
        <Input
          field='email'
          label='Email'
          value={formData.email.value}
          onChangeHandler={handleValueChange}
          type='text'
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.email.showError}
        />

        <Input
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={handleValueChange}
          type='password'
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.password.showError}
        />
        <button disabled={isSubmitButtonDisable}
        >
          Login
        </button>
      </form>
      <span onClick={switchAuthHandler}>
        ¿No tienes una cuenta? Regístrate
      </span>
    </div>
  )
}
