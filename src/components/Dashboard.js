import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import Price from "./Price";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});

  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
        }`}
    >
      <div className="col-span-3 md:col-span-3 xl:col-span-3 lg:row-span-1 md:row-span-2 row-span-2 flex flex-col justify-start items-start">
        <Header
          name={stockDetails.name}
          symbol={stockSymbol}
        />
        <div>
          <Price
            price={quote.pc}
            change={quote.d}
            changePercent={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
      </div>
      <div className="col-span-4 row-span-1 flex flex-col items-center my-2">
        <Search />
      </div>
      <div className="col-span-4 lg:col-span-3 md:col-span-3
       xl:col-span-2 row-span-4">
        <Chart />
      </div>
      <div className="col-span-4 lg:col-span-3 md:col-span-3
       xl:col-span-1 row-span-4">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
