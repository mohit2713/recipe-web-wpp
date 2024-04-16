// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "./firebase";
// // import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log(userCredential);
//       const user = userCredential.user;
//       localStorage.setItem("token", user.accessToken);
//       localStorage.setItem("user", JSON.stringify(user));
//       // navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="w-2/12 p-4 m-4 mr-auto ml-auto text-center">
//       <h1 className="text-3xl p-2 m-2">Signup Page</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col item">
//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="text-xl border p-2 m-2 rounded-md"
//         />
//         <input
//           type="passowrd"
//           placeholder="Your Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="text-xl border p-2 m-2 rounded-md"
//         />
//         <button
//           type="submit"
//           className=" text-2xl bg-cyan-700 p-2 m-2 rounded-md"
//         >
//           Signup
//         </button>
//       </form>
//       {/* <p>
//         Need to Login <Link to="/login">Login</Link>
//       </p> */}
//     </div>
//   );
// };

// export default Signup;
