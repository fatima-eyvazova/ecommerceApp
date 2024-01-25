import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { OrderTable, OrderFilter } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
import { RootState } from "../../../../redux/types";
import { makeRequest } from "../../../../services/api";
import { GetOrderItem, GetOrdersData } from "./types";

const Orders: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [list, setList] = useState<GetOrderItem[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let constructedQuery = "";

        if (startDate) {
          constructedQuery += `&startDate=${startDate}`;
        }

        if (endDate) {
          constructedQuery += `&endDate=${endDate}`;
        }

        if (searchInput) {
          constructedQuery += `&search=${searchInput}`;
        }
        if (status) {
          constructedQuery += `&status=${status}`;
        }
        const res = await makeRequest(
          `/dashboard/orders?perPage=${perPage}&page=${
            page + 1
          }${constructedQuery}`,
          "get",
          null,
          token
        );
        const prData = res?.data as { data: GetOrdersData };
        const dataArray = prData?.data?.data;
        setTotalCount(prData?.data?.totalCount || 0);
        setList(dataArray);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [token, startDate, endDate, searchInput, status, perPage, page]);

  return (
    <>
      <Sidebar>
        <OrderFilter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          endDate={endDate}
          startDate={startDate}
          setStatus={setStatus}
          status={status}
        />
        <OrderTable
          list={list}
          searchInput={searchInput}
          totalCount={totalCount}
          page={page}
          perPage={perPage}
          setPage={setPage}
          setPerPage={setPerPage}
        />
      </Sidebar>
    </>
  );
};

export default Orders;
