import { Link } from 'react-router-dom'
import s from "./CatCard.module.scss"

function CatCard({item}) {
  return (
    <Link to="/gigs?cat=design">
    <div className={s.catCard}>
        <img src={item.img} alt="" />
        <span className={s.desc}>{item.desc}</span>
        <span className={s.title}>{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCard