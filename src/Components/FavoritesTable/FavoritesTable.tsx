import React, { useContext } from "react";
import { Context } from "../../App";
import { Table } from "antd";

const FavoritesTable = () => {
  // @ts-ignore
  const { favoriteBanks } = useContext(Context);
  const columns = [
    {
      title: "IFSc",
      dataIndex: "ifsc",
      key: "ifsc",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Bank Name",
      dataIndex: "bank_name",
      key: "bank_name",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={favoriteBanks} />
    </div>
  );
};

export default FavoritesTable;
