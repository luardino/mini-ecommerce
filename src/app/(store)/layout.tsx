import { ReactNode } from "react";
import { Header } from "./components/Header";

export default function StoreLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto grid min-h-screen w-full grid-rows-[min-content_max_content] gap-5 px-8 py-8">
            <Header />
            {children}
        </div>)
}