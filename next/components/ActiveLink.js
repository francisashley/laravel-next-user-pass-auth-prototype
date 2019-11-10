import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, ...props }) => {
  const pathname = useRouter().pathname;

  // Throw error if link contains more than one child.
  let child = Children.only(children);

  // Add `active` class if link path matches current path.
  let className = child.props.className;
  className = pathname === props.href ? `${className} active` : className;

  // Clone child and update its `className`.
  child = React.cloneElement(child, { className });

  return <Link {...props}>{child}</Link>;
};

export default ActiveLink;
