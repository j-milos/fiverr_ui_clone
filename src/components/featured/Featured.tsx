import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import s from "./Featured.module.scss";

function Featured() {
  return (
    <div className={s.featured}>
      <div className={s.container}>
        <h1>
          Find the right <i>freelance</i> <br /> service, right away
        </h1>
        <div className={s.search}>
          <input type="text" placeholder="Search for any service..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className={s.popular}>
          <span>Popular:</span>
          <button className={s.featuredBtn}>Website Design</button>
          <button className={s.featuredBtn}>WordPress</button>
          <button className={s.featuredBtn}>Logo Design</button>
          <button className={s.featuredBtn}>AI Services</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
