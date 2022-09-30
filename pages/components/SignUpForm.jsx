import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(email, password);
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields");
      return;
    } else if (password != confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          router.push("/Successful");
          console.log(email, password);

          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
      setError(null);
    }
    // do something with the email and password
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        value={email}
        className="text-black outline-none p-2 rounded-lg w-full"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        className="text-black outline-none p-2 rounded-lg w-full"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        value={confirmPassword}
        className="text-black outline-none p-2 rounded-lg w-full"
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="mt-4 border-2 border-white rounded-xl px-12 py-2 inline-block font-semibold hover:bg-white hover:text-slate-500 ease-in"
        type="submit"
        // onClick={handleSubmit}
      >
        {" "}
        submit{" "}
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};

export default SignUpForm;
