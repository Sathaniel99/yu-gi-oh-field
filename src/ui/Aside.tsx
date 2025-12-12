// components
import { Version } from "./Version"
import { Description } from "./Descript"

export function Aside() {

    return (
        <aside className='relative w-auto md:w-80 lg:w-96 space-y-4 sm:space-y-6 shrink-0'>
            <Version />
            <Description />
        </aside>
    )
}