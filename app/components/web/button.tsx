interface ButtonProps {
  children: React.ReactNode
  className?: string
}

export default function Button({
  children,
  className = ''
}: ButtonProps) {
  return (
    <button className={`capitalize px-4 py-3 border border-white ${className}`}>
      {children}
    </button>
  );
}