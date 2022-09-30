import { useRouter } from "next/router";
import React from "react";

const Successful = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventdefault;
    router.push("/");
  };
  return (
    <div className="px-5">
      user creation successful
      <button className="p-4 w-4 h-4 font-bold" onClick={handleClick}>
        {" "}
        back{" "}
      </button>
    </div>
  );
};

export default Successful;
