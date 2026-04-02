// import './App.css';
// import Users from './Users';
// import {Users} from './Users';-------> Ase tab import krngy jab Users.js ko hum default export ni krrhy tab.

const { jsx } = require("react/jsx-runtime")

// function App() {

// ------Hum ek componenets ke andar dusra component use kar sktey hai but Demerit is hum is component ko khi bahr use ni kar skty fir.
//  just like ek function ke andar dusra function.

//   function Users () {
//   return (
//     <div>
//       <h1>Hello Components</h1>
//     </div>
//   )
// }

// function Apple(){
//   return (

//     <div>Apple Component</div>
//   )
// }

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       {/* <Users/>  */}
//       {/* <Apple/> */}
//     </div>

//   );

// }

// Also we can use a component  in same file :
// function Users (){
//   return (
//     <div>
//       <h1>Hello Users</h1>
//     </div>
//   )
// }

// export default App;

// ============ Function call in jsx ==============(lect-12)

// import React, { useState } from 'react'

// const App = () => {
//   function apple(){
//     alert("function call")
//   }

//   return (
//     <div className='App'>
//       <h1>Heloleeoooo</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   )
// }

// export default App

// ========================= State in Functional Components ==========(lect-13)
// What is state :variable that store data in react

// (Changing name on click)

// import React, { useState } from 'react'
// const App = () => {
//   const [data, setData] = useState("Sonu")
//   function update() {
//     setData("Ankit")
//   }
//   return (
//     <div>
//       <h1>Hello {data}</h1>
//       <button onClick={update}>Click</button>
//     </div>
//   )
// }
// export default App

// (Changing number on click)
// import React, { useState } from 'react'
// const App = () => {
//   const [data, setData] = useState(1)

//   function update() {
//     setData(data+1)
//   }

//   return (
//     <div>
//       <h1>Hello {data}</h1>
//       <button onClick={update}>Click</button>
//     </div>
//   )
// }

// export default App

//  Ky hum ek component ki state ko state ke bahr use kr skty hai??????
// Noooooooo!!!!!!!!!!!

// Ky hum react ke andar Component class and useState saathme use kar skty hai????
//

// ========= Props (lect-15)================(App.js me parameter pass krngy or Student.js me show krwaengy.)

// import React, { useState } from "react";
// import Students from "./Students";

// const App = () => {
//   const[name,setName]=useState("Maria")
//   function update(){
//     setName("Senorita")
//   }
//   return (
//     <>
//     <div>
//       <h1>Hello Props</h1>
//       {/* <Students name={"Sonu Sanju"} email="sonu8855@gmail.com" other={{address:'jharkhand',contact:"000"}}/> */}
//             {/* <Students name={"Ankit Kumar"} email="ankit855@gmail.com"/>
//                         <Students name={"Arvi"} email="arvi855@gmail.com"/> */}

//                               <Students name={name} />
//                         <button onClick={update}>Update name</button>
//     </div>
//     </>
//   )
// }

// export default App

// Can I pass function as props ?? -------- YES---------------------
// import React, { useState } from "react";
// import Students from "./Students";

// const App = () => {
//   const [heading, setHeading] = useState("Hi i am heading");
//   const [name, setName] = useState("Maria");

//   function update() {
//     setName("Senorita");
//   }

//   // function passed as props
//   function pass_as() {
//     setHeading("Hii I am function passed as PROPS");
//   }

//   return (
//     <div>
//       <h1>{heading}</h1>

//       <Students name={name} pass_as={pass_as} />

//       <button onClick={update}>Update name</button>
//     </div>
//   );
// };

// export default App;

// ========== Takin Input  from Input Box (lect-17) =============
// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);

//   // function to print the input while typing:
//   function getdata(val) {
//     console.log(val.target.value);
//     setData(val.target.value);
//   }

//   return (
//     <div>
//       //Agar print horha hai matlb agar user print pe click kiya to print = true hojaega to input screen pe visible hoga.
//       {print ? <h1>{data}</h1> : null}

//       <input type="text" onChange={getdata} />

//       //print pe click krney pe ye function triger hoga.
//       <button onClick={() => setPrint(true)}>Print</button>
//     </div>
//   );
// };

// export default App;

// ========= Hide and Show elements (lect-18) (Toggling)===============
// import React,{useState} from 'react'

// const App = () => {
//   const[status,setStatus]=useState(true)
//   return (
//     <div>
//       {
//       status?
//       <h1>Hello</h1>
//       :null
//       }
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}

//       {/* using signle button to hide and show toggle */}
//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }

// export default App

// ============ Handle Form (lect-19) =============
// import React, { useState } from "react";

// const App = () => {
//   // functio to prevent autosubmission of form:
//   function getFormData(e) {
//     console.log(name, tnc, interest);
//     e.preventDefault();
//   }

//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");

//   return (
//     <div>
//       <h1>Handle Forms</h1>
//       <form onSubmit={getFormData}>
//         <input
//           type="text"
//           placeholder="enter name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br></br>
//         <select onChange={(e) => setInterest(e.target.value)}>
//           <option>Marvel</option>
//           <option>Spiderman</option>
//           <option>DC</option>
//         </select>
//         <br></br>
//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept terms and Condition</span>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

// ================= Condition Rendering (lect-20)============
//  import React from 'react'
//  import Profile from './Profile'

//  const App = () => {
//    return (
//     <>
//      <div>
//        <h1>Cindition rendering !</h1>
//      </div>
//      <Profile/>
//      </>
//    )
//  }

//  export default App

// ======= Basics Form Validation (lect-21)=======================

// import React from 'react'
// import Login from './Login'

// const App = () => {
//   return (
//     <div>
//       <Login/>
//     </div>
//   )
// }

// export default App

// ============= Life Cycle Methods  (lect-23) ============
// componentDidMount --------->component create hua
// componentDidUpdate -------->component me kch update change hua
// componentWillUnmount ------->component ka life ktm hua

// =============First Life Cycle Method (lect-24)===========
// render() method sirf class compoenent ke andar banata hai functional component ke andar ni ban skta.
// render method 3 bar call hoti hai:  1.Jab Component banega   2.jab render() call hoga     3. jab props ya state upadte hoga
// import React from 'react'
// class App extends React.Component{
//     constructor(){
//         super()
//         console.log("contructor is running")
//         this.state={
//             data:"Sonu"
//         }
//     }
// render(){
//     console.log("render is running")
//     return(
//         <h1>Hello {this.state.data}</h1>
//     )
// }
// }

// export default App

// =============== Render Life Cycle method (lect-25) ===============

// import React,{useState} from 'react'
// import Users from './Users'

// const App = () => {
//     const[name,setName]=useState("Maria")
//   return (
//     <div>
//         <h1>Render Life</h1>
//       <Users name={name}/>
//       <button onClick={()=>setName("Sonu")}>Update Name</button>
//     </div>
//   )
// }

// export default App

// ============== componentDidMount life Cycle method (lect-26) =============
// There is No effects of state and props.
// what is the use of this: To use in API
// phly render chlga fir ye chlga
// Important Points (Exam + Interview)
// Ye sirf Class Components me hota hai
// Sirf ek baar run hota hai
// Perfect for:
// API calls 🌐
// Event listeners 🎧
// Timers ⏱️

// import React from 'react'
// class App extends React.Component {

//   componentDidMount() {
//     console.log("Component mount ho gaya!");
//   }

//   render() {
//     return <h1>Hello</h1>;
//   }

// }
// export default App

// 🔥 Example 1: API Call

// Ye sabse common use hai

// class App extends React.Component {
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       });
//   }

//   render() {
//     return <h1>Users Fetch ho rahe hain...</h1>;
//   }
// }

// 👉 Yaha kya ho raha hai:
// ✔️ Pehle render hota hai
// ✔️ UI screen pe visible hota hai
// ✔️ Uske baad componentDidMount() chalta hai
// ✔️ Fir API call hoti hai
// ✔️ Data aata hai → fir re-render hota hai

// ============= componentDidUpdate(lect-27) ================
// 👉 Har update ke baad console me message aayega
// 🔥 Example 1: State change pe trigger
// import React,{useState} from 'react'
// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   componentDidUpdate() {
//     console.log("Count update hua!");
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </>
//     );
//   }
// }
// export default App

// 👉 Jab button click hoga:

// state change hoga
// component re-render hoga
// componentDidUpdate chalega

// ⚠️ Important (Bahut Important!)

// componentDidUpdate me agar tum setState use karte ho bina condition ke → infinite loop ho jayega 😱

// ❌ Galat:

// componentDidUpdate() {
//   this.setState({ count: 10 }); // baar baar update hoga
// }

// 👉 Yeh crash kar dega app

// ✅ Correct Way (Condition lagao)
// componentDidUpdate(prevProps, prevState) {
//   if (prevState.count !== this.state.count) {
//     console.log("Count change hua hai");
//   }
// }

// 👉 Yaha:

// prevState = purana value
// this.state = current value

// 🔁 Real Use Case
// API call jab data change ho
// Form update detect karna
// DOM changes handle karna

// ============shouldComponentUpdate() (lect-28)========

// 👉 shouldComponentUpdate
// Main isko simple Hinglish + practical examples me samjhata hoon.
// 🧠 shouldComponentUpdate kya hota hai?

// 👉 Simple definition:
// Ye decide karta hai ki component re-render hona chahiye ya nahi

// Matlab:
// By default React har update pe re-render karta hai 😵
// Par kabhi kabhi zarurat nahi hoti ❌
// Tab hum shouldComponentUpdate use karte hain
// 🏗️ Real Life Analogy

// 🧠 Tumhari line ko perfect banate hain:
// "state change hoga → component re-render hoga → componentDidUpdate chalega"
// 👉 ✅ Bilkul sahi hai! (100% correct)
// Bas ek cheez add karo:
// ✔️ UI pehle update hoti hai
// ✔️ Uske baad componentDidUpdate chalta hai

// ⚠️ Important Concept (VERY IMPORTANT)
// 👉 componentDidUpdate() me directly setState() mat call karna
// warna infinite loop 🔁 ho jayega

// Socho:
// Tum YouTube scroll kar rahe ho
// Har choti change pe pura app reload ho jaye 😑
// 👉 Slow ho jayega na?
// Toh React puchta hai:
// “Kya mujhe re-render karna chahiye?”
// 👉 Ye decision = shouldComponentUpdate

// 📦 Syntax
// shouldComponentUpdate(nextProps, nextState) {
//   return true; // ya false
// }

// 👉 Return:

// true → re-render hoga ✅
// false → skip ho jayega ❌
// 🔥 Example 1: Basic
// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.count > 5) {
//       return false; // 5 ke baad update nahi hoga
//     }
//     return true;
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </>
//     );
//   }
// }

// 👉 Yaha:

// Count 0 → 5 tak update hoga
// 5 ke baad UI freeze (no re-render)

// ⚡ Example 2: Optimization (Real Use)
// shouldComponentUpdate(nextProps) {
//   if (nextProps.name !== this.props.name) {
//     return true;
//   }
//   return false;
// }

// 👉 Yaha:

// Sirf tab re-render hoga jab name change hoga
// Performance improve hogi 🚀
// ❗ Important Points
// Ye class components me use hota hai
// Performance optimization ke liye use hota hai
// Galat use → UI update hi nahi hoga 😬

// ⚠️ Common Mistake
// shouldComponentUpdate() {
//   return false;
// }

// 👉 Iska matlab:

// Component kabhi update hi nahi hoga ❌
// UI stuck ho jayega

// ================ componentWillUnMount (lect-29) =======

// 🧠 componentWillUnmount kya hota hai?

// 👉 Simple definition:

// Jab component screen se remove hone wala hota hai, tab ye method run hota hai

// Matlab:

// Component visible tha ✅
// Ab wo hatne wala hai (unmount) ❌
// Usse pehle cleanup ka kaam hota hai = componentWillUnmount
// 🏗️ Real Life Analogy

// Socho:

// Tum room chhod rahe ho 🚪
// Lights off karte ho, fan band karte ho

// 👉 Ye “cleaning before leaving” = componentWillUnmount

// 📦 Syntax
// class App extends React.Component {
//   componentWillUnmount() {
//     console.log("Component remove hone wala hai");
//   }

//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// 🔥 Example 1: Timer cleanup
// class App extends React.Component {
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Timer clean ho gaya");
//   }

//   render() {
//     return <h1>Timer Example</h1>;
//   }
// }

// 👉 Agar cleanup nahi karoge:

// Timer background me chalta rahega 😱
// Memory leak ho sakta hai
// 🔥 Example 2: Event Listener remove
// class App extends React.Component {
//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }

//   handleResize = () => {
//     console.log("Window resized");
//   };

//   render() {
//     return <h1>Resize window</h1>;
//   }
// }
// ❗ Important Points
// Ye last lifecycle method hota hai
// Mostly cleanup ke liye use hota hai
// Prevents:
// Memory leaks 🧠
// Unwanted background processes ⚠️
// ⚡ Modern React (Hooks version)

// 👉 Functional components me:

// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     return () => {
//       clearInterval(timer); // 👈 cleanup
//       console.log("Cleanup ho gaya");
//     };
//   }, []);

//   return <h1>Timer Example</h1>;
// }

// 👉 Ye return function hi:

// componentWillUnmount ka replacement hai

// ============💡 State change kab hota hai?=======================
// 👉 Jab bhi tum setState() call karte ho

// 💡 Props change kab hota hai?
// 👉 Jab parent component apni value change karke child ko new props bhejta hai

// 🧪 Example:
// Parent:
// <App>
//   <Child count={this.state.count} />
// </App>
// Child:
// <h1>{this.props.count}</h1>

// 👉 Agar parent me count change hua:
// Child ko new props milenge
// Child re-render hoga
// componentDidUpdate() chalega

// ================= Hooks (lect-30-31) =================================
// what is hooks>
//  Functional Componet ke andar  class features and components Methods use krny k liye hooks use krty hai.
// 💡 Hooks kya hote hain?

// 👉 Hooks are special functions in React
// 👉 Jo tumhe allow karte hain:
// State use karna
// Lifecycle handle karna
// Logic reuse karna

// 👉 WITHOUT using class components

// 🧠 Simple definition
// 👉 Hooks = Function components ko superpowers dena ⚡

// import React,{useEffect, useState} from 'react'
// const App = () => {
//     const[data,setData]=useState(0)

//     useEffect(()=>{
//         console.log("USEEFFECT-1")
//     })
//     useEffect(()=>{
//         console.log("USEEFFECT-2")
//     })

//     // whenever mouting will happen it will run only one time .
//     useEffect(()=>{
//         console.log("USEFFECT-3")
//     },[])

//     // jab jab data change hoga mtlb state change hoga tb tb useeffect run hoga.
//     useEffect(()=>{
//         console.log("USEFFECT-4")
//     },[data])

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={()=>setData(data+1)}>click</button>
//     </div>
//   )
// }
// export default App

// Can we use useEffect method inside function??
// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [data, setData] = useState(0);

//   useEffect(() => {
//     console.log("useEffect-1");
//   });

//   useEffect(() => {
//     function inside_useeffect() {
//       console.log("insideUseEffect !!!");
//     }
//     inside_useeffect();
//     // console.log("useeefetct-2")
//   });

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={() => setData(data + 1)}>click</button>

//     </div>
//   );
// };
// export default App;

// ==================useEffect Hooks with Condition (lect-32)===========

// import React, { useEffect, useState } from "react";
// const App = () => {
//   const [data, setData] = useState(0);
//   const[count,setCount]=useState(100);
//   useEffect(() => {
//     console.log("called with data");
//   },[data]);
//    useEffect(() => {
//     console.log("called with count");
//   },[count]);
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Update Count</button>
//     </div>
//   );
// };
// export default App;

//  import React,{useState,useEffect} from 'react'
// import Users from './Users'
//  const App = () => {
//     const[data,setData]=useState(0)
//     const[count,setCount]=useState(100)
//    return (
//      <div>
//        <Users count={count} data={data}/>
//                    <button onClick={()=>setCount(count+1)}>Update Count</button>

//              <button onClick={()=>setData(data+1)}>Update Data</button>

//      </div>
//    )
//  }

//  export default App

// ====================React-bootstrap(lect-34)==================
// import React from 'react'
// import {Button} from 'react-bootstrap'

// const App = () => {
//   return (
//     <div>
//       <Button onClick={()=>alert("Hello")}>Click Me</Button>
//       {/*  Variant Buttons from bootsraps */}
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//     </div>
//   )
// }

// export default App

// ============ Handle Array with Map Function(lect-35)===========
// .we can use looping out the return return statement does not return loops only mapping will works:

// import React from 'react'

// const App = () => {
//     const students=['Sonu','Ankit','Rahul','Janvi']
//     const studentees=[
//         {
//             name:"Sania Mirza",
//         email:'sania@gmail.com',
//         contact:123456789
//     },
//      {name:'Rahul',
//         email:'rahul@gmail.com',
//         contact:'4545'
//     },
//         {name:'Janvi',
//             email:'janu@gmail.com',
//             contact:'8923'
//         },
//     ]

//     // mapping:
//     students.map((items)=>{
//         console.log(items)
//     })

//     // looping:
//     for(let i=0;i<students.length;i++){
//         console.log(students[i]);
//     }
//   return (
//     <div>
//       <h1>-------Student Names------</h1>

//       {/* // Here map will work but loop will not work!!  */}
//       {/* map to print multiple homogenous entries in array: */}
//       {/* {
//         students.map((data)=>
//             <h3>{data}</h3>
//         )
//       } */}

// {/* map to print multiples hetrogeneous entries in array :*/}
//       {
//         studentees.map((data)=>
//             <h3>{data.name},{data.email},{data.contact}</h3>
//         )
//       }
//     </div>
//   )
// }

// export default App

// ===================List with Bootstrap(lect-36)===========
//  import React from 'react'
//  import{Table} from 'react-bootstrap'

//  const App = () => {
//     const users=[
//         {name:'Sonu',email:'sonu@gmail.com',contact:'11111'},
//         {name:'Ankit',email:'ankit99@gmail.com',contact:'222'},
//         {name:'Rahul',email:'rahul@gmail.com',contact:'4545'},
//         {name:'Janvi',email:'janu@gmail.com',contact:'8923'},
//     ]
//    return (
//      <div>
//         <h1>List with Bootstrap Table</h1>
//         <Table striped bordered hover>
//          <tr>
//                 <td>Name</td>
//                 <td>Email</td>
//                 <td>Contact</td>
//             </tr>
//             {
//                 users.map((item,i)=>
//                 <tr key={i}>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.contact}</td>
//                 </tr>)

//                 // agar kisi condition based output show krna hai to ase condition lagaengy:
//                 // users.map((item,i)=>
//                 //     item.contact==='4545'?
//                 // <tr key={i}>
//                 //     <td>{item.name}</td>
//                 //     <td>{item.email}</td>
//                 //     <td>{item.contact}</td>
//                 // </tr>:null)
//             }
//         </Table>

//      </div>
//    )
//  }

//  export default App

// =================== Nested  List with Nested Array(lect-37) =========================

//  ================== Reuse Component in loop (lect-38) =====================
// import React from 'react'
// import Users from './Users'

// const App = () => {
//     const users=[
//         {name:'Sonu',email:'sonu@gmail.com',contact:'11111'},
//         {name:'Ankit',email:'ankit99@gmail.com',contact:'222'},
//         {name:'Rahul',email:'rahul@gmail.com',contact:'4545'},
//         {name:'Janvi',email:'janu@gmail.com',contact:'8923'},
//     ]

//   return (
//     <div>

//         {/* we can use one componenet using mapping */}
//         <h1>Reuse Components with list</h1>
//         {
//             users.map((items,i)=>
//         <Users data={items}/>
//             )}

//     </div>
//   )
// }
// export default App

// =================== Passing data from child to parent (lect-40)==========

// ======================== Pure Components (lect-39-42) ================
// 🔹 Pure Component kya hota hai?
// React me PureComponent ek aisa component hai jo automatically check karta hai ki re-render karna hai ya nahi.
// 👉 Ye shallow comparison karta hai:
// props ka
// state ka
// Agar values same hain → re-render nahi karega
// Agar values change hui → re-render karega

// 🔹 Real Life Analogy 😄
// Socho tum ek teacher ho:
// Normal Component = har student ko har baar dobara padhaoge 😅
// Pure Component = sirf un students ko padhaoge jinko samajh nahi aaya 😎

// To Solve this problem web use "useMemo()" Unwanted calls ko rokta hai!!! --------> (For undestranding see Youtube video)

// import React, {useState, useMemo } from 'react'

// const App = () => {
//     const[count,setCount]=useState(0);
//     const[item,setItem]=useState(10);

//     const multiCountMemo=useMemo(function multiCount(){
//         console.log("multicount")
//         return count*5
//     },[count])
//   return (
//     <div>
//       <h1>useMemo Hook in React</h1>
//       <h2>Count : {count}</h2>
//       <h2>Items : {item}</h2>
//       <h2>{multiCountMemo}</h2>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setItem(item*10)}>Update Item</button>
//     </div>
//   )
// }

// export default App

// ========================= Ref (lect-43) ==========
// Dom ko direct acces krney ke liye use hota hai

// ======================== useRef (lect-44) ===============
// import React,{useRef} from 'react'

// const App = () => {

//     let inputRef=useRef(null)
//     function handleInput(){
//         console.log("function call")
//         inputRef.current.value="1000"
//         inputRef.current.focus();
//         inputRef.current.style.color="red"
//     }
//   return (
//     <div>
//       <h1>USEREF</h1>
//       <input type='text' ref={inputRef}/>
//       <button onClick={handleInput}>Handle Input</button>
//     </div>
//   )
// }

// export default App

// ================= forwardRef (lect-45) ===========
// Parent components se Child component me acces paa skty hai: DOM me without using state or props.

//  import React,{useRef} from 'react'
//  import Users from './Users'

//  const App = () => {
//     let inputref=useRef(null)
//     function updateInput(){
//         inputref.current.value="1000"
//     }
//    return (
//      <div>
//        <h1>Forwarded to child Component</h1>
//        <Users ref={inputref}/>
//        <button onClick={updateInput}>Update Input-Box</button>

//      </div>
//    )
//  }

//  export default App

// ========================== React Router (lect-49) =======================
// Single page wesbite banany me help krta hia without reload.

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// ====================== Links (lect-50) ===========
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Navbar from './Navbar'

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App

// ===================== 404 (lect-50) ===============
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Navbar from './Navbar'
// import Page404 from './Page404'

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//                 <Route path="/*" element={<Page404/>} />

//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App

//  ======================== Dynamic Routing -> Params (lect-52) ===============
// import React from "react";
// import {
//   useParams,
//   Route,
//   Routes,
//   BrowserRouter,
//   Navigate,
// } from "react-router-dom";
// import Users from "./Users";
// import Navbar from "./Navbar";
// import About from "./Components/About";
// import Home from "./Components/Home";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Users/:name" element={<Users />} />
//           <Route path="/*" element={<Navigate to="/" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// =================== searchParam Hook (Lect-55) ================



// ================ Routing SetUp (lect-56) =================
// import React from 'react'
// const App = () => {
//   return (
//     <div>
//         <h1>This is My Sonu Sanju</h1>
//     </div>
//   )
// }
// export default App



// ================= Routing (lect-57) ================
// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
// export default App

// ====================API (lect-64) =======
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>API INTRO</h1>
//     </div>
//   )
// }

// export default App


// ============== Redux (lect-74) ============
// Acontainer where you can store your application data of whole application in array format

// =========== Architecture (lect-75) ===============
// It has four pillars: Action-Reducer-Store-View

// ============ Installation (lect-76) ==========
// check npm and Node
// install reactjs
// install redux'
// install react-redux

import React from 'react'

const App = () => {
  return (
    <div>
      <H1>Hiiiiii</H1>
    </div>
  )
}

export default App


