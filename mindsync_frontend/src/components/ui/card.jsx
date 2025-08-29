import clsx from "clsx";

// PUBLIC_INTERFACE
export function Card({ className, children, role = "region", ...props }) {
  /** Glassmorphism card container. */
  return (
    <section
      role={role}
      className={clsx(
        "glass neo p-5 md:p-6",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
