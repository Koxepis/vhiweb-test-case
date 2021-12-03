import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-center  min-h-[50vh] sm:min-h-screen">
        <Link href={"/auth"}>
          <a className="hover:underline">click here to login</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
