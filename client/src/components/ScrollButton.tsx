import { useRef } from "react"

export const ScrollButton = ({className, buttonName}: {className?: string, buttonName: string}) => {
    return(
        <button className={className}>{buttonName}</button>
    )
}