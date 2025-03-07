// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("pharmacy"); // Default role
//   const router = useRouter();

 
//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const user = { email, password, role }; // ✅ Store password along with email and role
//     localStorage.setItem("user", JSON.stringify(user));
  
//     alert(`Account created for ${role}`);
//     await router.push("/auth/signin"); // Redirect to login page
//   };
  

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-96 rounded-lg bg-white p-6 shadow-md">
//         <h2 className="text-center text-2xl font-semibold">Create Account</h2>
//         <form onSubmit={handleSignUp} className="mt-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-2 w-full rounded border p-2"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-2 w-full rounded border p-2"
//             required
//           />
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="mt-2 w-full rounded border p-2"
//           >
//             <option value="pharmacy">Pharmacy</option>
//             <option value="healthcare">Health Department</option>
//             <option value="cdc">CDC</option>
//             <option value="labs">Labs</option>
//             {/* <option value="hospital">Hospital</option> */}
//             <option value="patient">Patient</option>
           
//           </select>
//           <button
//             type="submit"
//             className="mt-4 w-full rounded bg-green-500 p-2 text-white"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-2 text-center">
//           Already have an account?{" "}
//           <Link href="/auth/signin" className="text-blue-600">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




// *************************** Big size **********************


import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pharmacy");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const user = { email, password, role }; // ✅ Store password along with email and role
    localStorage.setItem("user", JSON.stringify(user));
  
    alert(`Account created for ${role}`);
    await router.push("/auth/signin"); // Redirect to login page
  };
  

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Sign In Redirect */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-purple-700 text-white">
        <h2 className="text-3xl font-bold">Already have an account?</h2>
        <p className="mt-2">Sign in to continue</p>
        <Link href="/auth/signin">
          <button className="mt-5 border border-white px-6 py-2 rounded-full">
            SIGN IN
          </button>
        </Link>
      </div>

      {/* Right Section - Sign Up */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-4xl font-bold text-purple-600">Create Account</h2>
        <form onSubmit={handleSignUp} className="w-80 mt-6">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md mt-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md mt-3"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border rounded-md mt-3"
          >
            <option value="pharmacy">Pharmacy</option>
            <option value="healthcare">Health Department</option>
            <option value="cdc">CDC</option>
            <option value="labs">Labs</option>
            <option value="patient">Patient</option>
          </select>
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg mt-6">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;






//***************** */ Small size   *************************


// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("pharmacy");
//   const router = useRouter();

 


//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const user = { email, password, role }; // ✅ Store password along with email and role
//     localStorage.setItem("user", JSON.stringify(user));
  
//     alert(`Account created for ${role}`);
//     await router.push("/auth/signin"); // Redirect to login page
//   };
  

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//         <h2 className="text-3xl font-bold text-center text-purple-700">Create Account</h2>
//         <form onSubmit={handleSignUp} className="mt-6">
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded-md mt-2"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 border rounded-md mt-2"
//             required
//           />
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full p-3 border rounded-md mt-2"
//           >
//             <option value="pharmacy">Pharmacy</option>
//             <option value="healthcare">Health Department</option>
//             <option value="cdc">CDC</option>
//             <option value="labs">Labs</option>
//             <option value="patient">Patient</option>
//           </select>
//           <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md mt-4">
//             SIGN UP
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <Link href="/auth/signin" className="text-purple-600 font-semibold">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
