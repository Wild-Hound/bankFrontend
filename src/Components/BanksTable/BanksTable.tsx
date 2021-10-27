import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import styles from "./BanksTable.module.scss";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Table, Tabs } from "antd";
import FavoritesTable from "../FavoritesTable/FavoritesTable";

const BanksTable = () => {
  const [favoriteBanksIFSC, setFavoriteBanksIFSC] = useState([]);

  // @ts-ignore
  const { tableData, favoriteBanks, setFavoriteBanks } = useContext(Context);

  const { TabPane } = Tabs;

  useEffect(() => {
    const tempArr: any[] = [];
    favoriteBanks?.forEach((bank: any) => {
      tempArr.push(bank.ifsc);
    });
    //   @ts-ignore
    setFavoriteBanksIFSC([...tempArr]);
  }, [favoriteBanks]);

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
    {
      title: "Action",
      key: "action",
      render: (text: any, data: any) => (
        <button
          className={styles.favoriteBtn}
          onClick={(e) => {
            const prevBanks = favoriteBanks;
            const prevBanksIFSC = favoriteBanksIFSC;
            // @ts-ignore
            if (!prevBanksIFSC.includes(data.ifsc)) {
              // @ts-ignore
              setFavoriteBanksIFSC([...prevBanksIFSC, data.ifsc]);
              // @ts-ignore
              setFavoriteBanks([...prevBanks, data]);
            } else {
              const tempArrifsc: any[] = [];
              const tempArr: any[] = [];
              prevBanks?.forEach((bank: any) => {
                //   @ts-ignore
                if (bank.ifsc !== data.ifsc) {
                  // @ts-ignore
                  tempArrifsc.push(bank.ifsc);
                  tempArr.push(bank);
                }
              });

              //   @ts-ignore
              setFavoriteBanksIFSC([...tempArrifsc]);
              setFavoriteBanks([...tempArr]);
            }
          }}
        >
          {
            //   @ts-ignore
            favoriteBanksIFSC.includes(data.ifsc) ? (
              <StarFilled />
            ) : (
              <StarOutlined />
            )
          }
        </button>
      ),
    },
  ];

  return (
    <div className={styles.parentWrapper}>
      <Tabs type="card">
        <TabPane tab="Banks" key="1">
          <Table
            columns={columns}
            dataSource={tableData}
            loading={(tableData as []).length === 0 ? true : false}
          />
        </TabPane>
        <TabPane tab="Favorites" key="2">
          <FavoritesTable />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BanksTable;
