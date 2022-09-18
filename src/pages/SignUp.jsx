import axios from "axios";
import { TextInput } from "flowbite-react";
import { A } from "hookrouter";
import { useState } from "react";

export default function SignUp() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    axios.post("").then((res) => {
      console.log(res);
    });
  };

  return (
    // Background
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen pt-32">
      {/* Card */}
      <div className="w-96 space-y-8 bg-white px-8 py-10 rounded-2xl shadow-lg mx-auto my-auto">
        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-semibold">Create account</h1>
          <p className="text-xs">
            Enter the email and password to create your account
          </p>
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

          {/* Create account */}
          <button
            className="w-full font-semibold text-white bg-brand-blue rounded-lg py-3"
            type="submit"
            onClick={handleSubmit}
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <div className="space-y-4">
          <hr></hr>

          <div className="flex justify-center">
            <p>Already have an account?</p>
            <A
              href="/signin"
              className="font-semibold text-brand-blue pl-2"
            >
              Sign in
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}
