// // Counter app using useState in react

// import React, { useState } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0)

//   return (
//     <>
//     <h1>Count: {count}</h1>
//     <button
//     className='bg-red-300 p-2 rounded text-white font-semibold'
//     onClick={() => {
//       setcount(count+1)
//     }}
//     >Increase</button>
//     <button
//     className='bg-green-300 p-2 rounded text-white font-semibold'
//     onClick={() => {
//       setcount(count-1)
//     }}
//     >Decrease</button>
//     </>
//   )
// }

// export default App

// Toggle Text – Show “Hello” and change it to “Goodbye” when clicking a button
// (and back again when clicked again).

// import React, { useState } from "react";

// const App = () => {
//   const [name, setname] = useState("Anit");
//   return (
//     <>
//       <h1>{name}</h1>
//       <button
//         className="p-2 bg-blue-400 rounded"
//         onClick={() => {
//           setname((prevname) => (prevname == "Anit" ? "Laxman" : "Anit"));
//         }}
//       >
//         Toggle Name
//       </button>
//     </>
//   );
// };

// export default App;

// Input Display – Create a text input and show the live value below it as you type.

// import React, { useState } from "react";

// const App = () => {
//   const [name, setname] = useState("");
//   return (
//     <div>
//       <input
//         className="border-2 border-black p-2 m-6"
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => {
//           setname(e.target.value);
//         }}
//       />
//       <p>Name: {name}</p>
//     </div>
//   );
// };

// export default App;


//using rest operator

// import React, { useState } from "react";

// const App = () => {
//   const [personDetail, setPersonDetail] = useState({
//     name: "",
//     age: "",
//     caste: "",
//   });

//   return (
//     <>
//       <h1>Enter your Personal Details</h1>

//       <div className="box">
//         <h2>Full Name:</h2>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={personDetail.name}
//           onChange={(e) =>
//             setPersonDetail(() => {
//               return {
//                 ...personDetail,
//                 name: e.target.value,
//               };
//             })
//           }
//         />
//       </div>

//       <p>Your name is {personDetail.name}</p>
//     </>
//   );
// };

// export default App;
