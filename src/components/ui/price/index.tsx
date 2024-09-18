import { useContext } from "react";

import CurrentMarketPrice from "./current-market-price";
import PriceChange from "./price-change";

import { DivElementProps, PriceChartContextProps } from "../../../lib/types";
import { cn, formatNumber, parsePriceChange } from "../../../lib/utils";

import { PriceChartContext } from "../../price-chart";

function Price(props: DivElementProps) {
  const { className } = props;

  const { displayPrice, displayPriceChange, displayPercentageChange } =
    useContext(PriceChartContext) as PriceChartContextProps;

  const { priceChange, priceChangeColor } = parsePriceChange(
    displayPriceChange,
    displayPercentageChange
  );

  const currentPrice = formatNumber(displayPrice);

  return (
    <div
      {...props}
      className={cn("flex flex-col gap-[10px] px-[60px]", className)}
    >
      <CurrentMarketPrice>{currentPrice ?? ""}</CurrentMarketPrice>
      <PriceChange className={priceChangeColor ?? ""}>{priceChange}</PriceChange>
    </div>
  );
}

export default Price;
