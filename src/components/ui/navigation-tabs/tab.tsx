import { TabProps } from "../../../lib/types";
import { cn } from "../../../lib/utils";

function Tab({ tab, isActive, setActiveTab }: TabProps) {
  const handleClick = () => {
    setActiveTab(tab?.toLowerCase());
  };

  return (
    <button
      className={cn(
        "px-[10px] py-[20px] text-[18px] leading-[22.77px] text-primary-gray cursor-pointer relative transition-colors after:absolute after:h-[3px] after:w-0 after:left-0 after:-bottom-[1px] after:bg-primary-blue hover:text-hover-gray",
        isActive && "after:w-full text-secondary-blue hover:text-secondary-blue"
      )}
      onClick={handleClick}
    >
      {tab}
    </button>
  );
}

export default Tab;
