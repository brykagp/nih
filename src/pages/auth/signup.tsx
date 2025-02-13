import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pharmacies"); // Default role
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy user storage (Replace this with backend API later)
    localStorage.setItem("user", JSON.stringify({ email, role }));

    alert(`Account created for ${role}`);
   await router.push("/auth/signin"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>
        <form onSubmit={handleSignUp} className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
           
            <option value="pharmacy">Pharmacy</option>
            <option value="healthcare">Healt Department</option>
             <option value="cdc">CDC</option>
            <option value="hospital">Hospital</option>
            <option value="patient">Patient</option>
                <option value="labs">Labs</option>

          </select>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
