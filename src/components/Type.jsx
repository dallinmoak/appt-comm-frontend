import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CommType({ type }) {
  return (
    <li>
      {/* eslint-disable-next-line react/prop-types */}
      <Link to={`types/${type._id}`}>{type.name}</Link>
    </li>
  );
}
