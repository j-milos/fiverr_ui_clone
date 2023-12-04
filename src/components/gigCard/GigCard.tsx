import { Link } from "react-router-dom";
import s from "./GigCard.module.scss";

interface GigCardProps {
  item: {
    img: string;
    pp: string;
    username: string;
    desc: string;
    price: number;
    star: number;
  };
}

const GigCard: React.FC<GigCardProps> = ({ item }) => {
  const { img, pp, username, desc, price, star } = item;

  return (
    <Link to="/gig/123" className="link">
      <div className={s.gigCard}>
        <img src={img} alt="" />
        <div className={s.info}>
          <div className={s.user}>
            <img src={pp} alt="" />
            <span>{username}</span>
          </div>
          <p>{desc}</p>
          <div className={s.star}>
            <img src="./img/star.png" alt="" />
            <span>{star}</span>
          </div>
        </div>
        <hr />
        <div className={s.detail}>
          <img src="./img/heart.png" alt="" />
          <div className={s.price}>
            <span>STARTING AT</span>
            <h2>
              ${price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
