import { Children, useContext } from "react";

import Tab from "./tab";

import { DivElementProps, PriceChartContextProps } from "../../../lib/types";
import { cn } from "../../../lib/utils";
import { TABS } from "../../../lib/constants";

import { PriceChartContext } from "../../price-chart";

function NavigationTabs({ className }: DivElementProps) {
  const { activeTab, setActiveTab } = useContext(
    PriceChartContext
  ) as PriceChartContextProps;
  return (
    <div
      className={cn(
        "flex gap-[10px] pl-[50px] pr-[60px] border-b border-b-[#EFF1F3]",
        className
      )}
    >
      {Children.toArray(
        TABS.map((tab) => {
          const isActive = tab.toLowerCase() === activeTab;
          return (
            <Tab tab={tab} isActive={isActive} setActiveTab={setActiveTab} />
          );
        })
      )}
    </div>
  );
}

export default NavigationTabs;
