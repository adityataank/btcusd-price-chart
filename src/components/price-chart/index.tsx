import { createContext, useEffect, useState } from "react";
import { Toaster } from "sonner";

import Price from "../ui/price";
import NavigationTabs from "../ui/navigation-tabs/navigation-tabs";
import ChartContainer from "../ui/chart-container";
import Summary from "../ui/summary";

import {
  CoinProps,
  ComponentMapTypes,
  HistoricalDataProps,
  PriceChartContextProps,
  TimeFrameProps,
} from "../../lib/types";
import { REQUEST } from "../../lib/request";
import { API_ROUTES } from "../../lib/api-routes";
import { parseChartData } from "../../lib/utils";
import UnderDevelopment from "../ui/under-development";

export const PriceChartContext = createContext<PriceChartContextProps | null>(
  null
);

const ComponentMap: ComponentMapTypes = {
  summary: <Summary />,
  chart: <ChartContainer />,
};

const COIN = "bitcoin"; // HARD CODED COIN
const LOADING_TEXT = "Gathering real-time crypto data...";

function PriceChart() {
  const [activeTab, setActiveTab] = useState("chart");
  const [activeTimeframe, setActiveTimeframe] = useState<TimeFrameProps>({
    label: "1w",
    value: 7,
  });
  const [coinData, setCoinData] = useState<CoinProps>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchingCoinData, setFetchingCoinData] = useState(false);
  const [historicalData, setHistoricalData] = useState<HistoricalDataProps>({
    prices: [],
    volumes: [],
  });

  const startFetching = () => setIsFetching(true);
  const stopFetching = () => setIsFetching(false);

  useEffect(() => {
    const fetchCoinData = async () => {
      setFetchingCoinData(true);
      const data = await REQUEST.get(API_ROUTES.get_coin_data(COIN));
      if (data) {
        setCoinData(data);
      }
      setFetchingCoinData(false);
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
      if (data?.prices && data?.total_volumes) {
        setHistoricalData({
          prices: parseChartData(data?.prices),
          volumes: parseChartData(data?.total_volumes),
        });
      }
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
    historicalData,
  };

  const selectedTabComponent = ComponentMap[activeTab] ?? <UnderDevelopment />;

  return (
    <PriceChartContext.Provider value={context}>
      {fetchingCoinData ? (
        <div className="h-full grid place-items-center text-2xl">
          {LOADING_TEXT}
        </div>
      ) : (
        coinData && (
          <div className="py-[60px] h-full">
            <Price className="mb-[20px]" />
            <NavigationTabs className="mb-[60px]" />
            <div className=" h-[calc(100dvh-385px)] px-[60px] pr-[19%]">
              {selectedTabComponent}
            </div>
          </div>
        )
      )}
      <Toaster position="top-right" />
    </PriceChartContext.Provider>
  );
}

export default PriceChart;
