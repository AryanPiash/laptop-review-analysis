import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color: match ? "red" : "rgb(0 42 162)" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  export default CustomLink;