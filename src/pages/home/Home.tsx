import s from "./Home.module.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import { cards, projects } from '../../data';
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";


function Home() {
  return (
    <div  className={s.home}>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} slidesToScroll={5}>
        {cards.map(card =>(
          <CatCard key={card.id} item={card}/>
        ))}
       </Slide> 
      <div className={s.features}>
        <div className={s.container}>
          <div className={s.item}>
            <h1>The best part? Everything.</h1>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
                Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
            </div>
            <div className={s.item}>
              <video src='./img/video.mp4' controls/>
            </div>
        </div>
      </div> 
      <div className={`${s.features} ${s.dark}`}>
        <div className={s.container}>
          <div className={s.item}>
            <h1>Fiverr <i>Business Solutions</i></h1>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Access top freelancers and professional business tools for any project
            </div>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Build your own branded marketplace of certified expert
            </div>
            <div className={s.title}>
              <img src='./img/check.png' alt=''/>
              Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className={s.item}>
              <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png' alt=''/>
            </div>
        </div>
      </div> 
      <Slide slidesToShow={4} slidesToScroll={4}>
        {projects.map(project =>(
          <ProjectCard key={project.id} item={project}/>
        ))}
       </Slide> 
    </div>
  )
}

export default Home