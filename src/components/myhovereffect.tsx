import { HoverEffect } from "../../components/ui/card-hover-effect";


export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto px-8 h-full">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Private Camera Owners",
        description: "Easy registration and location marking of your private cameras.",
        link: "#",
    },
    {
        title: "Law Enforcement",
        description: "Quickly identify and access video footage from private cameras.",
        link: "#",
    },
    {
        title: "Camera Specifications",
        description: "Detailed camera specifications including model, resolution, and capabilities.",
        link: "#",
    },
    {
        title: "Owner Contact Details",
        description: "Easy communication with camera owners for necessary actions.",
        link: "#",
    },
    {
        title: "Lorem Ipsum",
        description: "Easy communication with camera owners for necessary actions.",
        link: "#",
    },
    {
        title: "Lorem ipsum",
        description: "Easy communication with camera owners for necessary actions.",
        link: "#",
    },
];