import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | ({ href: string; target?: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "children" | "href" | "target"
      >)
    | ({ href?: undefined } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)
  );

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  const classes = twMerge(`${base} bg-electric text-white hover:bg-[#2359c9]`, className);
  if ("href" in props && props.href) {
    const { href, target, ...rest } = props;
    return (
      <Link href={href} target={target} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
  onDark = false,
  ...props
}: ButtonProps & { onDark?: boolean }) {
  const classes = twMerge(
    `${base} border ${
      onDark
        ? "border-white/30 text-white hover:bg-white/10"
        : "border-line text-navy hover:bg-off-white"
    }`,
    className,
  );
  if ("href" in props && props.href) {
    const { href, target, ...rest } = props;
    return (
      <Link href={href} target={target} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
