import { Children } from "react";

import TimeFrameButton from "./timeframe-button";

import { TIMEFRAMES } from "../../../lib/constants";

function Timeframes() {
  return (
    <div className="flex items-center gap-[6px]">
      {Children.toArray(
        TIMEFRAMES.map((option) => <TimeFrameButton {...option} />)
      )}
    </div>
  );
}

export default Timeframes;
