import { useState } from "react";

function Accordion({ items }) {
  const [expandedItems, setExpandedItems] = useState(0);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItems;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
