// import React, { useState } from 'react'

// const Login = () => {

//     const [user, setUser] = useState("")
//     const [password, setPassword] = useState("")
//     const [userErr, setUserErr] = useState(false)

//     // handle form submit
//     function loginhandle(e) {
//         e.preventDefault()

//         if (password.length < 8) {
//             alert("Password must be at least 8 characters")
//         } else {
//             alert("Login successful!")
//         }

//         console.log("Password:", password)
//     }

//     // handle user input
//     function userHandler(e) {
//         setUser(e.target.value)
//     }

//     // handle password input
//     function passwordHandler(e) {
//         setPassword(e.target.value)
//     }

//     return (
//         <div>
//             <h1>Login !</h1>
//             <form onSubmit={loginhandle}>
                
//                 <input 
//                     type="text" 
//                     placeholder='Enter UserId' 
//                     onChange={userHandler}
//                 />
//                 <br />

//                 <input 
//                     type="password" 
//                     placeholder='Enter Password' 
//                     onChange={passwordHandler}
//                 />
//                 <br />

//                 <button type='submit'>login</button>

//             </form>
//         </div>
//     )
// }

// export default Login