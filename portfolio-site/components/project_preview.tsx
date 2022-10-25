import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
    title: string;
    tag: string;
    desc: string;
    linkUrl: string;
    image: string;
}

const ProjectPreview = (props:ProjectPreviewInterface) => {

    return(
        <div className="flex gap-4 bg-slate-100 p-4 rounded-2xl">
            <div className="relative w-24 h-16 min-w-fit">
                <Image src={props.image} layout="fill" />
            </div>
            <div className="my-auto">
                <Link href={props.linkUrl}>
                    <a className="font-bold underline hover:no-underline">
                        {props.title}
                    </a>
                </Link>
                <div className="text-slate-500 text-xs italic mt-1 mb-1">{props.tag}</div>
                <div>{props.desc}</div>                
            </div>
        </div>
    );
}

export default ProjectPreview;