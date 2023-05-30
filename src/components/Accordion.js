import { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

function Accordion({ items }) {
  const [expandedItems, setExpandedItems] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedItems(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItems;

    const icon = <span>{isExpanded ? <FcExpand /> : <FcCollapse />}</span>;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
