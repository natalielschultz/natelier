"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "default" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "default", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Variant styles
          variant === "primary" && [
            "bg-button-primary-bg text-button-primary-text rounded-[2px]",
            "hover:bg-button-primary-hover",
          ],
          variant === "secondary" && [
            "bg-transparent text-text-primary border border-button-secondary-border rounded-[2px]",
            "hover:bg-button-secondary-hover-bg hover:text-button-secondary-hover-text",
          ],
          variant === "tertiary" && [
            "bg-transparent text-text-primary underline p-0",
            "hover:no-underline",
          ],
          // Size styles
          variant !== "tertiary" && size === "small" && "px-md py-sm text-xs",
          variant !== "tertiary" && size === "default" && "px-lg py-md text-sm",
          variant !== "tertiary" && size === "large" && "px-xl py-lg text-base",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
