import { FC, ReactNode } from "react";
import scss from "./ProjectLayout.module.scss"

interface ProjectProps {
    children: ReactNode
}

const ProjectLayout: FC<ProjectProps> = ({children}) => {
    return <div className={scss.projectLayout}>{children}</div>
}
export default ProjectLayout