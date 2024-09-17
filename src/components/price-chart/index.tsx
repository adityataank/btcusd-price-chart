import { createContext, useEffect, useState } from "react";

import Price from "../ui/price";
import NavigationTabs from "../ui/navigation-tabs/navigation-tabs";
import ChartContainer from "../ui/chart-container";

import {
  CoinProps,
  PriceChartContextProps,
  TimeFrameProps,
} from "../../lib/types";
import { REQUEST } from "../../lib/request";
import { API_ROUTES } from "../../lib/api-routes";

export const PriceChartContext = createContext<PriceChartContextProps | null>(
  null
);

const COIN = "bitcoin"; // HARD CODED COIN

function PriceChart() {
  const [activeTab, setActiveTab] = useState("chart");
  const [activeTimeframe, setActiveTimeframe] = useState<TimeFrameProps>({
    label: "1w",
    value: 7,
  });
  const [coinData, setCoinData] = useState<CoinProps>(null);
  const [isFetching, setIsFetching] = useState(false);
  // const [chartData, setChartData] = useState();

  const startFetching = () => setIsFetching(true);
  const stopFetching = () => setIsFetching(false);

  useEffect(() => {
    const fetchCoinData = async () => {
      const data = await REQUEST.get(API_ROUTES.get_coin_data(COIN));
      startFetching();
      if (data) {
        setCoinData(data);
      }
      stopFetching();
    };
    fetchCoinData();
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      startFetching();
      const data = await REQUEST.get(
        API_ROUTES.get_chart_data(COIN, activeTimeframe.value)
      );
      stopFetching();
      console.log(data);
    };

    if (activeTimeframe?.value) {
      fetchChartData();
    }
  }, [activeTimeframe?.value]);

  const context = {
    activeTimeframe,
    setActiveTimeframe,
    activeTab,
    setActiveTab,
    coinData,
    isFetching,
  };

  return (
    <PriceChartContext.Provider value={context}>
      {coinData && (
        <div className="py-[60px] h-full">
          <Price className="mb-[20px]" />
          <NavigationTabs className="mb-[60px]" />
          <ChartContainer />
        </div>
      )}
    </PriceChartContext.Provider>
  );
}

export default PriceChart;
