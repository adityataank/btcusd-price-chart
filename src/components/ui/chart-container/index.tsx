import Chart from "./chart";
import ChartTools from "./chat-tools";

function ChartContainer() {
  return (
    <div className="flex flex-col gap-[28px] h-full">
      <ChartTools />
      <Chart />
    </div>
  );
}

export default ChartContainer;
