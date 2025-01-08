'use client';
type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
  disable: boolean; // Update this to explicitly use `boolean` type
};

export const Button = ({ children, size = "medium", className, disable }: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={`text-black rounded-full bg-white ${sizeClassNames[size]} ${className}`}
      disabled={disable} 
    >
      {children}
    </button>
  );
};