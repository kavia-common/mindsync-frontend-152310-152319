import { cva } from "class-variance-authority";
import clsx from "clsx";

// PUBLIC_INTERFACE
export function Button({ className, variant = "primary", size = "md", ...props }) {
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
  return <button className={clsx(styles({ variant, size }), className)} {...props} />;
}
