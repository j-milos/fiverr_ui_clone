import { useState } from "react";
import s from "./Gigs.module.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);

  const reSort = (type: string) => {
    // Da li može ovako?
    setSort(type);
    setOpen(false);
  };
  return (
    <div className={s.gigs}>
      <div className={s.container}>
        <span className={s.breadcrumbs}>
          Fiverr `{">"}`Graphics & Design `{">"}`
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className={s.menu}>
          <div className={s.left}>
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button className={s.applyBtn}>Apply</button>
          </div>
          <div className={s.right}>
            <span className={s.sortBy}>Sort By</span>
            <span className={s.sortType}>
              {sort === "sales" ? "Best selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className={s.rightMenu}>
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={s.cards}>
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
