import { useState } from "react";
import toast from "react-hot-toast";
import React from 'react'
import { registerRequest, loginRequest } from "../../services/api";

export const userRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async(email, username, password) => {
        setIsLoading(true)
        const user = {
            email,
            username,
            password
        }
        //Consultar al API
        const response = await registerRequest(user)
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data || 
                'Error general al intentar registrar el usuario. Intenta de nuevo.'
            )
        }
        console.log(response)
    }
  return {
    register,
    isLoading
  }
}

export const userLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const login = async(email, password) => {
        setIsLoading(true)
        const user = {
            email,
            password
        }
        //Consultar al API
        const response = await loginRequest(user)
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data || 
                'Error xd al intentar loguear el usuario. Intenta de nuevo.'
            )
        }
        console.log(response)
    }
  return {
    login,
    isLoading
  }
}
