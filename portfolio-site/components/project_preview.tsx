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
        <div className="flex gap-4 bg-slate-100 p-4 rounded-2xl hover:bg-slate-50 h-40">
            <div className="relative w-1/4 min-w-fit">
                <Image src={props.image} layout="fill" className="object-scale-down" />
            </div>
            <div className="my-auto w-3/4">
                <Link href={props.linkUrl}>
                    <a className="font-bold underline hover:no-underline">
                        {props.title}
                    </a>
                </Link>
                <div className="text-slate-500 text-xs italic mt-1 mb-1">{props.tag}</div>
                <div className="text-slate-600 text-sm">{props.desc}</div>                
            </div>
        </div>
    );
}

export default ProjectPreview;