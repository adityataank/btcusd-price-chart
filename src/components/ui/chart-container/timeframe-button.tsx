import { useContext } from "react";

import { PriceChartContext } from "../../price-chart";

import { PriceChartContextProps, TimeFrameProps } from "../../../lib/types";

import { cn } from "../../../lib/utils";
import { toast } from "sonner";

function TimeFrameButton(props: TimeFrameProps) {
  const { label, disabled } = props;
  const { activeTimeframe, setActiveTimeframe, isFetching } = useContext(
    PriceChartContext
  ) as PriceChartContextProps;

  const handleClick = () => {
    if (disabled) {
      toast.info(
        "Upgrade to a premium plan to gain comprehensive access to all historical data."
      );
      return;
    }
    setActiveTimeframe(props);
  };

  const isActive = label.toLowerCase() === activeTimeframe.label;

  return (
    <button
      disabled={isFetching}
      onClick={handleClick}
      className={cn(
        "px-[14px] py-[5px] text-primary-gray text-[18px] leading-[22.77px] transition-colors hover:text-hover-gray disabled:cursor-wait",
        isActive && "bg-primary-blue text-white rounded-[5px] hover:text-white"
      )}
    >
      {label}
    </button>
  );
}

export default TimeFrameButton;
