import GeneralTools from "./general-tools";
import Timeframes from "./timeframes";

function ChartTools() {
  return (
    <div className="flex items-center justify-between gap-8 flex-wrap">
      <GeneralTools />
      <Timeframes />
    </div>
  );
}

export default ChartTools;
