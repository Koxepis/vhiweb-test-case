import { useRouter } from "next/router";
import React from "react";

const Reject = (props: {}) => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/auth");
  }, 2000);

  return (
    <div className="w-4/5 sm:w-4/12 my-48 bg-white flex flex-col justify-center items-center shadow-sm mx-auto py-12">
      <h1 className="font-extrabold text-2xl text-center">
        {"You're Rejected"}
      </h1>
      <p className="text-sm sm:text-base text-gray-700">
        Please sign in first to continue
      </p>
    </div>
  );
};

export default Reject;
