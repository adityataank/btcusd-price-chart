import { PriceChangeProps } from "../../../lib/types";
import { cn } from "../../../lib/utils";

function PriceChange({ children, className }: PriceChangeProps) {
  return (
    <p
      className={cn(
        "text-primary-green text-[18px] leading-[22.77px]",
        className
      )}
    >
      {children}
    </p>
  );
}

export default PriceChange;
