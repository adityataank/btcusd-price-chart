import { Children } from "react";
import AddIcon from "../icons/add";
import ExpandIcon from "../icons/expand";
import { toast } from "sonner";

const TOOLS = [
  {
    icon: <ExpandIcon />,
    name: "Fullscreen",
  },
  { icon: <AddIcon />, name: "Compare" },
];

function GeneralTools() {
  const handleClick = () => {
    toast.info("Feature under development.");
  };

  return (
    <div className="flex items-center gap-[31px]">
      {Children.toArray(
        TOOLS.map(({ icon, name }) => (
          <button
            className="flex items-center gap-[10px] cursor-pointer group"
            onClick={handleClick}
          >
            {icon}
            <p className="text-[18px] leading-[22.77px] text-primary-gray">
              {name}
            </p>
          </button>
        ))
      )}
    </div>
  );
}

export default GeneralTools;
