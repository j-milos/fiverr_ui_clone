import { Link } from "react-router-dom";
import s from "./ProjectCard.module.scss";

interface ProjectCardProps {
  item: {
    img: string;
    pp: string;
    cat: string;
    username: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  const { img, pp, cat, username } = item;
  return (
    <Link to="/" className="link">
      <div className={s.projectCard}>
        <img src={img} alt="" />
        <div className={s.info}>
          <img src={pp} alt="" />
          <div className={s.texts}>
            <h2>{cat}</h2>
            <span>{username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
