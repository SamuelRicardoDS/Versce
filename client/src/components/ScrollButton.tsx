import { useRef } from "react"


'use client'
export const ScrollButton = ({className, buttonName}: {className?: string, buttonName: string}) => {
    const handleClick = () => {
        const section = buttonName.toLowerCase()
        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }
    return(
        <button onClick={handleClick} className={className}>{buttonName}</button>
    )
}