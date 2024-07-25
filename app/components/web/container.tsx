// 'use client'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className = ''
}: ContainerProps) {
  return (
    <section className={`w-full max-w-[1200px] m-auto bg-transparent ${className}`}>
      {children}
    </section>
  )
}
