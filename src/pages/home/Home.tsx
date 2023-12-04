import s from "./Home.module.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div className={s.home}>
      <Featured />
      <TrustedBy />
      <Slide
        settings={{
          slidesToShow: 5,
          slidesToScroll: 5,
        }}
      >
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className={s.features}>
        <div className={s.container}>
          <div className={s.item}>
            <h1>The best part? Everything.</h1>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className={s.item}>
            <video
              poster="/img/videothumbnail.webp"
              src="./img/video.mp4"
              controls
            />
          </div>
        </div>
      </div>
      <div className={`${s.features} ${s.dark}`}>
        <div className={s.container}>
          <div className={s.item}>
            <h1>
              fiverr<span className={s.dot}>.</span> <i>Business Solutions</i>
            </h1>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              <p>
                Access top freelancers and professional business tools for any
                project
              </p>
            </div>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              <p>Build your own branded marketplace of certified expert</p>
            </div>
            <div className={s.title}>
              <img src="./img/check.png" alt="" />
              <p>
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution.
              </p>
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className={s.item}>
            <img
              className={s.darkimg}
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide
        settings={{
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
      <hr />
    </div>
  );
}

export default Home;
