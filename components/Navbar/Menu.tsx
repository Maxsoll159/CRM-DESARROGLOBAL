import { BarraMenu } from "./BarraMenu"

export default function Menu() {
    return (
        <>
            <div className="space-y-2 w-[5%] transition-all hover:w-[15%]  shadow-lg bg-[#2D62ED] hidden lg:block xl:block z-100 h-screen">
                <BarraMenu />
            </div>
        </>
    )
}