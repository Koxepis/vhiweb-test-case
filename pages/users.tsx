import React, { useMemo } from "react";
import { Table } from "../components/modules/Table";

const Users = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "test",
        accessor: "test",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        test: "berak",
      },
    ],
    []
  );

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Users;
