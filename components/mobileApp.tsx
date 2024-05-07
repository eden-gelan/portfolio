import { MobileAppsData } from "@/lib/constants"
import GraphicsCard from "./graphicsCard"
export default function MobileApp() {
    return (
        <div className="max-w-[900px] mx-auto mt-40 py-8 px-10 ">
            <div className=" text-3xl font-semibold mb-10">Graphics design</div>
            <ul role="list" className="grid grid-cols-1 gap-y-16 gap-10 sm:grid-cols-3 sm:px-0">
                {MobileAppsData.map((graphics) => (
                    <GraphicsCard key={graphics?.title} graphics={graphics} />
                ))}

            </ul>
        </div>
    )
}