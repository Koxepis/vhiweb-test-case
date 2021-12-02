import React from "react";
import Image from "next/image";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { GetServerSideProps } from "next";
import { Layout } from "../../components/layouts/Layout";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1/data");
  const data = await res.json();
  return {
    props: {
      dataUser: data.data,
    },
  };
};

const Users: React.FC<UsersPageProps> = ({ dataUser }: any) => {
  return (
    <>
      <Layout>
        <ul className="divide-y divide-gray-200">
          {dataUser.map((item: any) => (
            <li key={item.id}>
              <a href={"/"} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 relative h-12 w-12">
                      <Image
                        className="rounded-full"
                        src={item.avatar}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-primary-600 truncate">
                          {item.first_name + ` ` + item.last_name}
                        </p>

                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <MailIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">{item.email}</span>
                        </p>
                      </div>

                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Registered on{" "}
                            <time dateTime={"2020-01-07"}>
                              {"January 7, 2020"}
                            </time>
                          </p>

                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                            {"Waiting"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Users;
