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

    const storedUser: string | null = localStorage.getItem("user");
    if (!storedUser) {
      alert("User not found! Please sign up.");
      return;
    }

    const parsedUser: User = JSON.parse(storedUser) as User;
    const { email: storedEmail, role } = parsedUser;

    if (email === storedEmail) {
      alert(`Logged in as ${role}`);
      await router.push(`/dashboard/${role}`);
      console.log(role);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="mt-4">
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-2">
          Don&apos;t have an account?{" "}
         
<Link href="/auth/signup" className="text-blue-600">
  Create one
</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
















