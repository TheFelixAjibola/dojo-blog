import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops! Sorry...</h2>
      <hr />
      <p>That Page Cannot Be Found.</p>
      <Link to="/">Back to the Homepage...</Link>
    </div>
  );
};

export default NotFound;
