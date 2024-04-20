/* --- ------------------ VALIDACION EMAIL ----------------------*/ 

export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Please enter a correct email!'


/* --- ------------------ VALIDACION USERNAME ----------------------*/ 
export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

export const usernameValidationMessage = 'Username must be between 3 to 8 characters'

/* --- ------------------ VALIDACION PASSWORD ----------------------*/ 
export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

export const passwordValidationMessage = 'Password must be betwen 6 to 12 characters'

/* --- ------------------ VALIDACION PASSWORD CONFIRM ----------------------*/ 
export const validatePasswordConfirm = (password, passConfirm) => {
    return password === passConfirm
}

export const passConfirmValidationMessage = 'La contrasena no coincide!'

/* --- ------------------ VALIDACION PASSWORD FOR LOGIN ----------------------*/ 

// Importa aquí la función para obtener la contraseña del usuario desde tu base de datos MongoDB
// import { getPasswordFromDatabase } from './databaseFunctions';

export const validatePasswordLogin = async (username, password) => {
    try {
    
        // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
        if (password === password) {
            return true; // Contraseña correcta
        } else {
            return false; // Contraseña incorrecta
        }
    } catch (error) {
        console.error("Error validating password for login:", error);
        return false; // Manejo de errores
    }
}

export const passwordLoginValidationMessage = 'La contraseña no es correcta';
