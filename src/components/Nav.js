import requests from "../../utils/requests";
import { useRouter } from "next/router";

function Nav() {
    const router = useRouter();
    return <nav className="relative">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowwrap 
        space-x-10 sm:space-x-20 overflow-auto max-w-[98vw] mx-2 custom-scroll">
            {Object.entries(requests).map(([key, { title, url }]) => {
                return (
                    <h2 key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="Last:pr-24 cursor-pointer transition duration
                    -100 transform hover:scale-125 hover:text-white
                     active:text-red-500"
                    >
                        {title}
                    </h2>
                )
            })}
        </div>
        <div className="absolute top-0 right-8 bg-gradient-to-t from-
        [#06202A] h-10 w-1/12 " />

    </nav>;

}

export default Nav
