import { FaSortUp, FaSort, FaSortDown } from "react-icons/fa";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <FaSort />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <FaSort />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <FaSortUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <FaSortDown />
      </div>
    );
  }
}

export default SortableTable;
