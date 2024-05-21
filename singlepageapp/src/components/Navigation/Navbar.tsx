import Logo from "../../assets/logo-color.png";
import { ReactNode, useRef, useState, useEffect } from "react";

interface InterfaceNavbar {
    icon: ReactNode;
    text: string;
    url?: string;
    action?: () => void;
}
interface NavbarProps {
    navbarLinks: InterfaceNavbar[];
    onItemClick: (text: string) => void;
    }

    const Navbar: React.FC<NavbarProps> = ({ navbarLinks, onItemClick }) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);
    const navLinksContainerRef = useRef<HTMLDivElement | null>(null);
    const navLinksRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isToggled) {
            navLinksContainerRef.current!.style.height = "0";
        } else {
            navLinksContainerRef.current!.style.height = `${navLinksRef.current!.getBoundingClientRect().height}px`;
        }
    }, [isToggled]);

    return (
    <nav className="md:hidden sticky top-0 z-10">
        <div className="p-8  bg-darkgreen flex justify-between">
            <img className="h-12" src={Logo} alt="iWalet Logo" title="iWalet Logo"/>
            <button
                className={`w-12 h-12 transition-transform transform ${
                    isToggled ? 'rotate-90' : ''
                }`}
                onClick={() => setIsToggled(!isToggled)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                fill="#ffffff"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
            </svg>
            </button>
        </div>
        <div className="h-0 overflow-hidden transition-all duration-300 ease-linear" ref={navLinksContainerRef}>
            <div className="bg-darkgreen flex flex-col" ref={navLinksRef}>
            {navbarLinks.map(({ icon, text, url }) => {
                if (url) {
                    return (
                    <a
                        key={text}
                        href={url}
                        className="flex  flex-row gap-4 items-center transition-all duration-300 ease-linear py-4 px-4 cursor-pointer hover:pl-8"
                    >
                        <span className="w-8 h-8">{icon}</span>
                        <p className="text-white">{text}</p>
                    </a>
                    );
                } else {
                    return (
                    <div
                        key={text}
                        className="flex  flex-row gap-4 items-center transition-all duration-300 ease-linear py-4 px-4 cursor-pointer hover:pl-8"
                        onClick={() => {
                        onItemClick(text);
                        }}
                    >
                        <span className="w-8 h-8">{icon}</span>
                        <p className="text-white">{text}</p>
                    </div>
                    );
                }
            })}
            </div>
        </div>
    </nav>
    );
};

export default Navbar;