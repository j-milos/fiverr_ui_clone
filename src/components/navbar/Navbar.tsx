import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Navbar.module.scss";
import SideMenu from "../SideMenu/SideMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";

function Navbar() {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

  const { pathname } = useLocation();

  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const isActiveMenu = () => {
    window.scrollY > 100 ? setActiveMenu(true) : setActiveMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isActiveMenu);

    return () => {
      window.removeEventListener("scroll", isActiveMenu);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: false,
  };

  const navbarBtnActive = active || pathname !== "/";

  return (
    <div
      className={clsx(s.navbar, {
        [s.active]: navbarBtnActive,
      })}
    >
      <SideMenu
        open={isSideMenuOpened}
        onClose={() => setIsSideMenuOpened(false)}
      />

      <div className={s.container}>
        <div className={s.logo}>
          <FontAwesomeIcon
            icon={faBars}
            className={s.bars}
            onClick={() => setIsSideMenuOpened((state) => !state)}
          />
          <Link to="/" className="link">
            <span className={s.text}>fiverr</span>
          </Link>
          <span className={s.dot}>.</span>
        </div>
        <div className={s.links}>
          <span>Business solutions</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser.isSeller ? (
            <div
              ref={userRef}
              className={s.user}
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://media.istockphoto.com/id/1096419446/photo/modern-cheerful-business-man-in-deep-blue-shirt-standing-with-crossed-arms-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=r4f-QedoEjL9KU-H96imU5UI5594wFUj2A9PgD8JXGY="
                alt=""
              />
              <span className={s.mainLinks}>{currentUser?.username}</span>
              {open && (
                <div className={s.options}>
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span className={s.mainLinks}>Sign in</span>
              <Link className="link" to="/register">
                <button className={clsx(s.joinBtn)}>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {activeMenu && (
        <>
          <hr />
          <div className={clsx({ [s.menu]: activeMenu })}>
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video and Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Proggraming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
