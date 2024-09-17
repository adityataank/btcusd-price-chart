import { useContext } from "react";
import parse from "html-react-parser";

import { PriceChartContext } from "../../price-chart";
import { CoinProps, PriceChartContextProps } from "../../../lib/types";

const FALLBACK_TEXT = "We don't have any summary for this coin :(";

function Summary() {
  const { coinData = {} as CoinProps } = useContext(
    PriceChartContext
  ) as PriceChartContextProps;

  if (!coinData) {
    return null;
  }

  const {
    description: { en },
  } = coinData ?? {};

  return (
    <div className="h-full text-xl leading-8 overflow-auto">
      {parse(en ?? FALLBACK_TEXT)}
    </div>
  );
}

export default Summary;
