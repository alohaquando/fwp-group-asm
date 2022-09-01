import axios from "axios";
import { TextInput, Label, Checkbox } from "flowbite-react";
import { A } from "hookrouter";
import { useState } from "react";

export default function SignIn() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("").then((res) => {
      console.log(res);
    });
  };

  return (
    // Background
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex">
      {/* Card */}
      <div className="w-96 space-y-8 bg-white px-8 py-10 rounded-2xl shadow-lg mx-auto my-auto">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold">Welcome</h1>
          <p className="text-xs">Sign in to your account</p>
        </div>

        <form className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <TextInput
              id="username"
              type="username"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              required={true}
            />
          </div>

          {/* Password */}
          <div>
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required={true}
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          {/* Sign in */}
          <button
            className="w-full font-semibold text-white bg-brand-blue rounded-lg py-3"
            type="submit"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <div className="space-y-4">
          <hr></hr>

          <div className="flex justify-center">
            <p>Don't have an account?</p>
            <A
              href="/signup"
              className="font-semibold text-brand-blue pl-2"
            >
              Sign up
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}
