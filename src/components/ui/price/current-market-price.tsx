import { ChildrenProps } from "../../../lib/types";

function CurrentMarketPrice({ children }: ChildrenProps) {
  return (
    <div className="flex gap-2">
      <h1 className="text-[70px] leading-[88.56px] text-secondary-blue">
        {children}
      </h1>
      <span className="pt-[17px] text-2xl text-secondary-gray leading-[30.36px] font-medium">
        USD
      </span>
    </div>
  );
}

export default CurrentMarketPrice;
