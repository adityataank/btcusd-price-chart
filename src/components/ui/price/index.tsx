import { useContext } from "react";

import CurrentMarketPrice from "./current-market-price";
import PriceChange from "./price-change";

import {
  CoinProps,
  DivElementProps,
  PriceChartContextProps,
} from "../../../lib/types";
import { cn, formatNumber, parsePriceChange } from "../../../lib/utils";

import { PriceChartContext } from "../../price-chart";

function Price(props: DivElementProps) {
  const { className } = props;

  const { coinData = {} as CoinProps } = useContext(
    PriceChartContext
  ) as PriceChartContextProps;

  if (!coinData) {
    return null;
  }

  const {
    market_data: {
      current_price: { usd },
      price_change_24h,
      price_change_percentage_24h,
    },
  } = coinData ?? {};

  const { priceChange, priceChangeColor } = parsePriceChange(
    price_change_24h,
    price_change_percentage_24h
  );

  const currentPrice = formatNumber(usd);

  return (
    <div
      {...props}
      className={cn("flex flex-col gap-[10px] px-[60px]", className)}
    >
      <CurrentMarketPrice>{currentPrice}</CurrentMarketPrice>
      <PriceChange className={priceChangeColor}>{priceChange}</PriceChange>
    </div>
  );
}

export default Price;
