import Link from "next/link";
import auth from "../utils/auth";
import routeTo from "../utils/routeTo";

const LogOutLink = props => {
  return (
    <Link href="#">
      <a
        onClick={e => {
          e.preventDefault();
          try {
            auth.logout().then(() => routeTo("/"));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default LogOutLink;
