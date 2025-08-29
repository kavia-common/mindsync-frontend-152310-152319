import { cva } from "class-variance-authority";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Polymorphic Button component.
 * - Renders a native <button> by default.
 * - If href is provided, renders an <a> anchor for navigation.
 * - If `to` (react-router) is provided, renders a <RouterLink>.
 * - For maximum flexibility, an `asChild` prop can be used to pass a custom child element.
 */
export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  to,
  asChild = false,
  children,
  ...props
}) {
  /** Accessible, stylized button with glass/neumorphism states. */
  const styles = cva(
    "inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-primary/60 disabled:opacity-60 disabled:cursor-not-allowed",
    {
      variants: {
        variant: {
          primary: "bg-primary text-white hover:opacity-90 shadow-glow",
          ghost: "bg-white/5 hover:bg-white/10 text-white",
          outline: "border border-white/20 hover:bg-white/5",
        },
        size: {
          sm: "px-3 py-1.5 text-sm",
          md: "px-4 py-2",
          lg: "px-6 py-3 text-lg",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    }
  );

  const classNames = clsx(styles({ variant, size }), className);

  // If asChild is true, allow custom element wrapper to receive styles/props
  if (asChild && children) {
    // Clone child with merged className and props
    const child = Array.isArray(children) ? children[0] : children;
    return {
      ...child,
      props: {
        ...child.props,
        ...props,
        className: clsx(child.props?.className, classNames),
      },
    };
  }

  // Router link
  if (to) {
    return (
      <RouterLink to={to} className={classNames} {...props}>
        {children}
      </RouterLink>
    );
  }

  // Anchor link
  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    );
  }

  // Default button
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
