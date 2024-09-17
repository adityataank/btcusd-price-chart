import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { CrossHairCoordinateTypes } from "../../../lib/types";

const ChartTooltip = (
  props: TooltipProps<ValueType, NameType> & {
    setCrossHairCoordinates: ({ x, y }: CrossHairCoordinateTypes) => void;
  }
) => {
  const {
    active,
    payload,
    coordinate,
    setCrossHairCoordinates = () => {},
  } = props;

  if (active && payload && payload?.[0]?.value) {
    if (coordinate?.y && coordinate?.x) {
      const { x, y } = coordinate;
      setCrossHairCoordinates({ x, y });
    }
    return <></>;
  }
};

export default ChartTooltip;
