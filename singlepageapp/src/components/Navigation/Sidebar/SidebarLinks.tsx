// SidebarLink.tsx
import { ReactNode } from "react";

interface InterfaceSidebar {
  icon: ReactNode;
  text: string;
  url?: string;
  action?: () => void;
  onItemClick?: (text: string) => void; // Add onItemClick to the interface
}

const SidebarLink = ({ icon, text, url, action, onItemClick }: InterfaceSidebar) => {
    const handleClick = () => {
        if (onItemClick && text) {
        onItemClick(text);
        }

        if (action) {
        action();
        }
    };

    if (url) {
        return (
        <a
            href={url}
            className="flex flex-row gap-4 items-center transition-all duration-300 ease-linear hover:pl-4 hover:cursor-pointer"
        >
            <span className="w-4 h-4">{icon}</span>
            <p className="text-white">{text}</p>
        </a>
        );
    } else {
        return (
        <div
            className="flex flex-row gap-4 items-center transition-all duration-300 ease-linear hover:pl-4 hover:cursor-pointer"
            onClick={handleClick}
        >
            <span className="w-4 h-4">{icon}</span>
            <p className="text-white">{text}</p>
        </div>
        );
    }
};

export default SidebarLink;
