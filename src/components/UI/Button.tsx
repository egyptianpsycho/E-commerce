import React, { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { type LinkProps } from "react-router-dom";
type BaseProps = {
  children?: React.ReactNode;
};
type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & {
    to?: never;
  };
type ButtonLinkProps = LinkProps &
  BaseProps & {
    to: string;
  };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

const Button = (props: ButtonLinkProps | ButtonProps) => {
  if (isRouterLink(props)) {
    const { children, to, ...otherProps } = props;

    return (
      <Link {...otherProps} to={to}>
        {children}
      </Link>
    );
  } else {
    const { children, ...otherProps } = props as ButtonProps;
    return <button {...otherProps}>{children}</button>;
  }
};

export default Button;
