import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { ChartDataProps } from "../../../lib/types";

function Volumes({ volumes }: { volumes: ChartDataProps[] }) {
  return (
    <div className="h-[70px] w-full bottom-[5px] absolute -z-[10]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={volumes}
          margin={{
            right: 0,
            left: 0,
          }}
        >
          <Bar dataKey="value" fill="#E2E4E7" barSize={3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Volumes;
