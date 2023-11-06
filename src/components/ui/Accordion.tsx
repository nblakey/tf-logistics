import { useState } from 'react'
import MaterialIcons from './MaterialIcons.tsx'

type Props = {
    children: React.ReactNode
    title: string
}

const Accordion = ({ children, title }: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div className='w-full'>
            <div onClick={() => setIsCollapsed(!isCollapsed)} className='flex justify-between items-center hover:cursor-pointer'>
                <span>{title}</span>
                <div className={`duration-200 ease-linear ${isCollapsed ? 'rotate-0' : '-rotate-180'}`}><MaterialIcons icon="KeyboardArrowDownIcon" /></div>
            </div>
            <div className={`w-full overflow-hidden transition-[max-height] ${isCollapsed ? 'max-h-0' : 'max-h-96'}`}>
                {children}
            </div>
        </div>
    )
}

export default Accordion