import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";

interface UsersPageProps {
  data: {
    data: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }[];
  };
}

const Users = ({ data }: UsersPageProps) => {
  const dataUser = data.data;

  return (
    <div>
      <div className="">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="text-xl text-gray-500">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse. Vivamus
                fringilla.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {dataUser.map((item: any) => (
                  <li key={item.id}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <button className="w-16 h-16 lg:w-20 lg:h-20 relative">
                        <Image
                          className="rounded-full"
                          src={item.avatar}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </button>
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3>{item.first_name + ` ` + item.last_name}</h3>
                        <p className="text-primary-600">{item.email}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1/data");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
