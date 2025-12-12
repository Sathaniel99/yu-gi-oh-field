export function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const isNull = text === '' ? true : false;
  return (
    <>
      <span className="relative group inline-block">
        {children}
        <span
        className={
          `pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs px-2 py-1 rounded 
          ${!isNull ? 'bg-black/95 border border-neutral-900' : 'bg-transparent'} text-white text-xs
          opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-pre-line`}>
          {text}
        </span>
      </span>
    </>
  );
}
