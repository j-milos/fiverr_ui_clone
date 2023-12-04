import { MenuItem } from "../MenuItem/MenuItem";
import s from "./Footer.module.scss";
import { footerItem } from "../SideMenu/sideMenuData";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.item}>
            <h2>Categories </h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className={s.item}>
            <h2>About </h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className={s.item}>
            <h2>Support </h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>

          <div className={s.item}>
            <h2>Community </h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className={s.item}>
            <h2>More From Fiverr </h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <ul className={s.tabletTopFooter}>
          {footerItem.map((item) => (
            <MenuItem
              mainMenuItem={{ title: item.title, link: item.link }}
              submenu={item.submenu}
            />
          ))}
        </ul>
        <hr />
        <div className={s.bottom}>
          <div className={s.left}>
            <h2>fiverr</h2>
            <span>© Liverr International Ltd. 2023</span>
          </div>
          <div className={s.right}>
            <div className={s.social}>
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className={s.links}>
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className={s.links}>
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
