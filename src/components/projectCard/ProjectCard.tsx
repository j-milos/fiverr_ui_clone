import { Link } from 'react-router-dom'
import s from "./ProjectCard.module.scss"

function ProjectCard({item}) {
  return (
    <Link to="/" className="link">
    <div className={s.projectCard}>
        <img src={item.img} alt="" />
        <div className={s.info}>
          <img src={item.pp} alt="" />
          <div className={s.texts}>
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default ProjectCard