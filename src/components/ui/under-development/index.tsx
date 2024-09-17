import { useContext } from "react";
import { PriceChartContext } from "../../price-chart";
import { PriceChartContextProps } from "../../../lib/types";

function UnderDevelopment() {
  const { activeTab } = useContext(PriceChartContext) as PriceChartContextProps;

  return (
    <div className="h-full text-xl">
      <p>
        The <strong className="capitalize">{activeTab ?? "selected"}</strong>{" "}
        section is currently under development and will be available soon.
      </p>
    </div>
  );
}

export default UnderDevelopment;
