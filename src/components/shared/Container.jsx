export function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full max-w-[1920px] ${className}`}>
      {children}
    </div>
  );
}
