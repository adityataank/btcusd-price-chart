import React from "react";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type DivElementProps = React.HTMLProps<HTMLDivElement>;

export type SvgElementProps = React.SVGProps<SVGSVGElement>;

export type TabProps = {
  tab: string;
  isActive: boolean;
  setActiveTab: (tab: string) => void;
};

export type CoinProps = null | {
  market_data: {
    current_price: { usd: number };
    price_change_24h: number;
    price_change_percentage_24h: number;
  };
  description: {
    en: string;
  };
};

export type TimeFrameProps = {
  label: string;
  value: number | string;
  disabled?: boolean;
};

export type HistoricalDataProps = {
  prices: ChartDataProps[];
  volumes: ChartDataProps[];
};

export type PriceChartContextProps = {
  activeTimeframe: TimeFrameProps;
  setActiveTimeframe: (timeframe: TimeFrameProps) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  coinData: CoinProps;
  isFetching: boolean;
  historicalData: HistoricalDataProps;
  displayPrice: number;
  displayPriceChange: number;
  displayPercentageChange: number;
};

export type PriceChangeProps = React.HTMLProps<HTMLParagraphElement>;

export type ChartDataProps = {
  timestamp: number;
  value: number;
};

export type ComponentMapTypes = { [key: string]: React.ReactElement };

export type CrossHairCoordinateTypes = {
  x: number;
  y: number;
};
