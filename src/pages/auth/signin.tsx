// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";


// interface User {
//   email: string;
//   role: string;
// }


// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();


//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) {
//       alert("User not found! Please sign up.");
//       return;
//     }
  
//     try {
//       // Define expected type explicitly
//       const parsedUser = JSON.parse(storedUser) as { email: string; password: string; role: string };
  
//       if (email === parsedUser.email && password === parsedUser.password) {
//         alert(`Logged in as ${parsedUser.role}`);
//         await router.push(`/dashboard/${parsedUser.role}`);
//       } else {
//         alert("Invalid credentials! Please try again.");
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       alert("Something went wrong. Please sign up again.");
//     }
//   };
  

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center">Sign In</h2>
//         <form onSubmit={handleSignIn} className="mt-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded mt-2"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded mt-2"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded mt-4"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="text-center mt-2">
//           Don&apos;t have an account?{" "}
         
// <Link href="/auth/signup" className="text-blue-600">
//   Sign Up
// </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







// *************************** Big size **********************


import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface User {
  email: string;
  role: string;
}

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("User not found! Please sign up.");
      return;
    }
  
    try {
      // Define expected type explicitly
      const parsedUser = JSON.parse(storedUser) as { email: string; password: string; role: string };
  
      if (email === parsedUser.email && password === parsedUser.password) {
        alert(`Logged in as ${parsedUser.role}`);
        await router.push(`/dashboard/${parsedUser.role}`);
      } else {
        alert("Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      alert("Something went wrong. Please sign up again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Sign In */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h2 className="text-4xl font-bold text-purple-600">Welcome back!</h2>
        <form onSubmit={handleSignIn} className="w-80 mt-6">
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
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg mt-6">
            SIGN IN
          </button>
        </form>
        <Link href="#" className="text-purple-600 mt-3">Forgot your password?</Link>
      </div>

      {/* Right Section - Signup Redirect */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-purple-700 text-white">
        <h2 className="text-3xl font-bold">Don&apos;t have an account?</h2>
        <p className="mt-2">Start your journey in one click</p>
        <Link href="/auth/signup">
          <button className="mt-5 border border-white px-6 py-2 rounded-full">
            SIGN UP
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;








//***************** */ Small size   *************************


// import { useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// interface User {
//   email: string;
//   role: string;
// }

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) {
//       alert("User not found! Please sign up.");
//       return;
//     }
  
//     try {
//       // Define expected type explicitly
//       const parsedUser = JSON.parse(storedUser) as { email: string; password: string; role: string };
  
//       if (email === parsedUser.email && password === parsedUser.password) {
//         alert(`Logged in as ${parsedUser.role}`);
//         await router.push(`/dashboard/${parsedUser.role}`);
//       } else {
//         alert("Invalid credentials! Please try again.");
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       alert("Something went wrong. Please sign up again.");
//     }
//   };
  

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//         <h2 className="text-3xl font-bold text-center text-purple-700">Welcome Back!</h2>
//         <form onSubmit={handleSignIn} className="mt-6">
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
//           <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-md mt-4">
//             SIGN IN
//           </button>
//         </form>
//         <div className="text-center mt-3">
//           <Link href="#" className="text-purple-600">Forgot your password?</Link>
//         </div>
//         <p className="text-center mt-4">
//           Don&apos;t have an account?{" "}
//           <Link href="/auth/signup" className="text-purple-600 font-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
