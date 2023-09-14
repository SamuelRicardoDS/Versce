export const Services = () => {
    return (
        <div id="serviços" className="flex flex-col w-screen h-auto 
        mt-36 p-5
        md:mt-72 md:p-5
        lg:mt-96 lg:p-5">
            <h1 className="text-4xl font-bold">services</h1>
            <div className="flex flex-row mt-10 justify-center">
                <div className="bg-secondary-secondaryBlack rounded-lg p-3">
                    <h1 className="font-semibold text-2xl">
                        Desenvolvimento <br /> de Software
                    </h1>
                    <h2 className="font-medium text-xl mt-3">Desenvolvimento web</h2>
                    <p className="font-extralight ml-5">
                       Desenvolvimento de protótipo
                    <br />Desenvolvimento de aplicações web 
                    <br />Desenvolvimento de responsividade
                    <br />Desenvolvimento de servidor
                    </p>
                    <h2 className="font-medium text-xl mt-3">Desenvolvimento mobile</h2>
                    <p className="font-extralight ml-5">
                        Desenvolvimento de protótipo
                    <br />Desenvolvimento de aplicativos IOS/Android
                    </p>
                </div>
                <div className="ml-5 bg-secondary-secondaryBlack rounded-lg p-3">
                    <h1 className="font-semibold text-2xl">
                        Gestão de tráfego
                    </h1>
                    <p>vai tomar no cu fernando</p>
                </div>
                <div className="ml-5 bg-secondary-secondaryBlack rounded-lg p-3">
                    <h1 className="font-semibold text-2xl">
                        Marketing de conteúdo
                    </h1>
                    <p>Criação de Logo</p>
                </div>
            </div>
        </div>
    )
}