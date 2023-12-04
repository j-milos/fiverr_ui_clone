import { Link } from "react-router-dom";
import s from "./CatCard.module.scss";

interface CatCardProps {
  item: {
    img: string;
    desc: string;
    title: string;
  };
}

const CatCard: React.FC<CatCardProps> = ({ item }) => {
  const { img, desc, title } = item;

  return (
    <Link to="/gigs?cat=design">
      <div className={s.catCard}>
        <img src={img} alt="" />
        <div className={s.catCardTextWrapper}>
          <span className={s.desc}>{desc}</span>
          <span className={s.title}>{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
