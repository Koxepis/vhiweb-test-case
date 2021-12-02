import React from "react";
import { Footer } from "../templates/Footer";
import Navbar from "../templates/Navbar";
interface Props {
  children?: any;
}

export const Layout = (props: Props) => {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center min-h-screen">
      <div className="bg-white shadow overflow-hidden min-w-full sm:min-w-[85%] sm:rounded-md">
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
