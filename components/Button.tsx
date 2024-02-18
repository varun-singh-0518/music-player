"use client";

import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, children, disabled, type = "button", ...props}, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// interface ButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset" | undefined;
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   className,
//   disabled,
//   type,
// }) => {
//   return (
//     <button
//       type={type}
//       className={twMerge(
//         `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
//         className
//       )}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

export default Button;
