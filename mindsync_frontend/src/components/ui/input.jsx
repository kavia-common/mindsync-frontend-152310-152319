import clsx from "clsx";

// PUBLIC_INTERFACE
export function Input({ className, ...props }) {
  /** Accessible input with neumorphism and glass look. */
  return (
    <input
      className={clsx(
        "w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2 text-white placeholder-white/60 outline-none focus:ring-2 ring-primary/60",
        className
      )}
      {...props}
    />
  );
}
