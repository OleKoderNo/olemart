import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
