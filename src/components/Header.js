import { Bars3Icon } from "@heroicons/react/16/solid"
import { useState } from "react"

export default function Header() {
 const [tmenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary">
        <h3 className="font-bold text-black">Rocklin K S</h3>
        <nav className="hidden md:block">
            <ul className="flex text-white">   
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contacts</a></li>
            </ul>
        </nav>
        {tmenu && <nav className="block md:hidden">
            <ul className="flex flex-col text-white mobile-nav">   
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contacts</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!tmenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}