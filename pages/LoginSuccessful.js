import { useRouter } from "next/router";
import React from "react";

const LoginSuccessful = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventdefault;
    router.push("/");
  };
  return (
    <div className="p-4">
      loginSuccessful 
      <button className="p-4 w-4 h-4 font-bold" onClick={handleClick}> back </button>
    </div>
  );
};

export default LoginSuccessful;
