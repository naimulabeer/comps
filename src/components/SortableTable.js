import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
  const { config } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} Is Sortable
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
