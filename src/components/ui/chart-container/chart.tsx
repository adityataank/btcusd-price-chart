import { useContext, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { PriceChartContext } from "../../price-chart";
import ChartTooltip from "./chart-tooltip";

import {
  CrossHairCoordinateTypes,
  PriceChartContextProps,
} from "../../../lib/types";
import Volumes from "./volumes";
import { CategoricalChartState } from "recharts/types/chart/types";
import { formatNumber } from "../../../lib/utils";

function Chart() {
  const [crossHairCoordinates, setCrossHairCoordinates] =
    useState<CrossHairCoordinateTypes>({
      x: 0,
      y: 0,
    });
  const [hoveredValue, setHoveredValue] = useState("");
  const { historicalData, displayPriceChange } = useContext(
    PriceChartContext
  ) as PriceChartContextProps;

  const { prices, volumes } = historicalData ?? {};

  const chartRef = useRef(null);

  const handleMouseMove = (e: CategoricalChartState) => {
    if (e && e.activePayload && e.activePayload.length) {
      // Access the Y-axis value from the active payload
      const yAxisValue = e.activePayload[0].value;
      setHoveredValue(formatNumber(yAxisValue));
    }
  };

  const resetState = () => {
    setCrossHairCoordinates({ x: 0, y: 0 });
    setHoveredValue("");
  };

  const HorizontalAxis = () => {
    return (
      crossHairCoordinates.y > 0 && (
        <span
          className="border-t-[2px] border-dashed border-[#99999980] w-full absolute z-10"
          style={{ transform: `translateY(${crossHairCoordinates.y}px)` }}
        />
      )
    );
  };

  const VerticalAxis = () => {
    return (
      crossHairCoordinates.x > 0 && (
        <span
          className="border-l-[2px] border-dashed border-[#99999980] h-full absolute z-10"
          style={{ transform: `translateX(${crossHairCoordinates.x}px)` }}
        />
      )
    );
  };

  const HoveredValue = () => {
    return (
      Boolean(hoveredValue) && (
        <div
          className="py-[5px] px-[14px] w-fit bg-secondary-blue grid place-items-center rounded-[5px] absolute -right-[75px] z-30"
          style={{ transform: `translateY(${crossHairCoordinates.y - 17}px)` }}
        >
          <p className="text-medium text-lg text-white">{hoveredValue}</p>
        </div>
      )
    );
  };

  const color = displayPriceChange < 0 ? "#D9302550" : "#E8E7FF";
  const strokeColor = displayPriceChange < 0 ? "#D93025" : "#4B40EE";

  return (
    <div
      className="h-full border-b border-[#E2E4E7] relative"
      onMouseLeave={resetState}
    >
      <HorizontalAxis />
      <VerticalAxis />
      <HoveredValue />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={prices}
          margin={{ bottom: 0 }}
          onMouseMove={handleMouseMove}
          ref={chartRef}
        >
          <defs width="100%">
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor={color} stopOpacity={1} />
              <stop offset="85%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis hide interval={Math.floor(prices.length / 6)} />
          <YAxis
            dataKey="value"
            domain={["dataMin", "dataMax"]}
            hide
            padding={{ bottom: 70, top: 5 }}
          />
          <CartesianGrid strokeWidth={1} stroke="#E2E4E7" horizontal={false} />
          <Area
            dataKey="value"
            strokeWidth={2}
            stroke={strokeColor}
            fill="url(#colorPrice)"
            activeDot={false}
          />
          <Tooltip
            content={
              <ChartTooltip setCrossHairCoordinates={setCrossHairCoordinates} />
            }
            cursor={{ display: "none" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <Volumes volumes={volumes} />
    </div>
  );
}

export default Chart;
