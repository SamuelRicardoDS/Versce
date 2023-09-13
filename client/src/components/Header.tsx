import { ScrollButton } from "./ScrollButton"

export const Header = () => {
    return(
        <div className="font-bold p-5 flex flex-row w-screen h-20 top-0 absolute justify-between 
        text-base 
        md:text-2xl 
        lg:text-3xl">
            <h1 className="text-zinc-100">VM</h1>
            <div className="flex  flex-row">
                <ScrollButton buttonName="SERVIÇOS" className=""/>
                <ScrollButton buttonName="PROJETOS" className="ml-3 md:ml-8 lg:ml-10"/>
                <ScrollButton buttonName="CONTATO" className="ml-3 md:ml-8 lg:ml-10"/>
            </div>
        </div>
    )
}