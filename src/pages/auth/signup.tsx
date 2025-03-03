import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pharmacy"); // Default role
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy user storage (Replace this with backend API later)
    localStorage.setItem("user", JSON.stringify({ email, role }));

    alert(`Account created for ${role}`);
    await router.push("/auth/signin"); // Redirect to login page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold">Create Account</h2>
        <form onSubmit={handleSignUp} className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded border p-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded border p-2"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 w-full rounded border p-2"
          >
            <option value="pharmacy">Pharmacy</option>
            <option value="healthcare">Health Department</option>
            <option value="cdc">CDC</option>
            <option value="labs">Labs</option>
            <option value="hospital">Hospital</option>
            <option value="patient">Patient</option>
           
          </select>
          <button
            type="submit"
            className="mt-4 w-full rounded bg-green-500 p-2 text-white"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-center">
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
