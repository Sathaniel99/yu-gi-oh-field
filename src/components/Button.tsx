interface ButtonProps {
    text: string;
    classAditional?: string;
    icon?: React.ReactNode;

}

export function Button({ text, classAditional = "", icon }: ButtonProps) {
    return (
        <>
            <button className={`${classAditional} border border-neutral-600/50 bg-neutral-900 hover:bg-neutral-800 active:bg-white/5 px-2 py-1 rounded-md transition-all text-neutral-50! hover:text-blue-500! font-bold font-fredericka-the-great`} type="button">{(icon && <>{icon}</>)}{" "}{text}</button>
        </>
    )
}