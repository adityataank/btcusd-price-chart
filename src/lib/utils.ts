import { twMerge, ClassNameValue } from "tailwind-merge";
import { ChartDataProps } from "./types";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(inputs);
}

export function formatNumber(num: number): string {
  const formattedNumber = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedNumber;
}

export function parsePriceChange(
  priceChange: number,
  percentageChange: number
) {
  if (!priceChange || !percentageChange) {
    return {};
  }

  const prefixSymbol = priceChange < 0 ? "-" : "+"; // setting the prefix symbol.

  // convertig number into string with a precision of 2 decimals.
  const stringPriceChange = formatNumber(priceChange);
  const stringPercentageChange = formatNumber(percentageChange);

  const strippedPriceChange =
    priceChange < 0 ? stringPriceChange?.slice(1) : stringPriceChange;

  const strippedPercentageChange =
    priceChange < 0 ? stringPercentageChange?.slice(1) : stringPercentageChange; // removing "-" from percentage change.

  const formattedPriceChange = `${prefixSymbol} ${strippedPriceChange} (${strippedPercentageChange}%)`; // formatting the price change as per the design.

  const priceChangeColor =
    priceChange < 0 ? "text-primary-red" : "text-primary-green"; // setting the text color based on change in price.

  return { priceChange: formattedPriceChange, priceChangeColor };
}

export function parseChartData(
  dataArray: [number, number][]
): ChartDataProps[] {
  const parsedArray = dataArray.map((item) => {
    const datetime = new Date(item[0]).toLocaleString();
    const price = parseFloat(item[1]?.toFixed(2));
    return {
      timestamp: item[0],
      value: price,
      displayPrice: formatNumber(price),
      datetime,
    };
  });
  return parsedArray;
}

export function calculatePriceChange(
  cmp: number | undefined,
  initialPrice: number | undefined
): [number, number] {
  if (cmp && initialPrice) {
    const priceDifference = cmp - initialPrice;
    const percentageDifference = (priceDifference / cmp) * 100;
    return [priceDifference, percentageDifference];
  }
  return [0, 0];
}
