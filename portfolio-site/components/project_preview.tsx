const ProjectPreview = () => {

    const title: string = "Neural Network (Timeseries Analysis – IBM Stock Price) – Python";
    const tag: string = "Part of: DATA SCIENCE / ENGINEERING PROJECTS";

    return(
        <div>
            <a href={"/"} className="font-bold underline hover:no-underline">
                {title}
            </a>
            <div>Project Link (with image)</div>
            <div>{tag}</div>
        </div>
    );
}

export default ProjectPreview;