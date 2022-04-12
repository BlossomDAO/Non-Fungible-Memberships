const SIZE = {
  sm: "px-4 py-2 text-xl xs:px-4",
  md: "px-4 py-2 text-2xl xs:px-8",
  lg: "px-4 py-2 text-3xl xs:px-10",
}

export default function Button({
    children,
    className,
    size="md",
    hoverable=true,
    variant = "gradient", 
    ...rest
}) {

  const sizeClass = SIZE[size];
  const variants = {
      gradient: `bg-gradient-to-r from-grd-ltBlue to-grd-blue text-gray-800 `,
      outline: `text-white  border border-grd-ltBlue hover:border-grd-blue `,
  }

  return (
  <button 
    disabled={false} 
    {...rest}
    className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed font-mono rounded-full ${className} ${variants[variant]}`}>
      {children}
  </button>
  )
}