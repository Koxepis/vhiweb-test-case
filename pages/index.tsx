import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/users");
  };

  return (
    <>
      <div className="flex items-center justify-center  min-h-[50vh] sm:min-h-screen">
        <button
          onClick={handleSubmit}
          className="bg-primary-500 p-1.5 px-3 rounded-md border border-neutral-600"
        >
          submit
        </button>
      </div>
    </>
  );
};

export default Home;
