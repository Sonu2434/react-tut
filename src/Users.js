// Isko hum seperate components

// import React from 'react'
// class Users extends React.Component{
//   render(){
//     console.log("render method",this.props)
//   return (
//     <div>
//       <h1>User Components {this.props.name}</h1>
//     </div>
//   )
// }
// }
// export default Users








// import React,{useEffect,useState} from 'react'

// const Users = (props) => {

//     useEffect(()=>{
//         alert("count is :"+props.count)
//     },[props.count])

//   return (
//     <div>
//       <h1>Count Props: {props.count}</h1>
//       <h2>Count Data: {props.data}</h2>
//     </div>
//   )
// }

// export default Users


// import React from 'react'

// const Users = (props) => {
//   return (
//     <div>
//       <span>User :{props.data.name}</span>
//             <span>User :{props.data.email}</span>

//       <span>User :{props.data.contact}</span>

//     </div>
//   )
// }

// export default Users




// import React,{forwardRef} from 'react'

// const Users = (props,ref) => {
//   return (
//     <div>
//       <input type='text' ref={ref}/>
//     </div>
//   )
// }

// export default forwardRef(Users)




// import React from 'react'
// import{useParams} from 'react-router-dom'

// const Users = () => {
//     const params=useParams();
//     const {name}=params;
//   return (
//     <div>
//       <h1>This is {name}</h1>
//     </div>
//   )
// }

// export default Users

// ========= Navigation on click (lect-56)
// =============Nested Roting (lect-58)
// =============useLocation Hooks(lect-58)
// =============Protected route (lect-59)


import React from 'react'

const Users = () => {
  return (
    <div>
      <h1>This is Sonu Sanju</h1>
    </div>
  )
}
export default Users











