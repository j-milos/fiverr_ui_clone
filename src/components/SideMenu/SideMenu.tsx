import s from "./SideMenu.module.scss";
import { sideMenuBottom, sideMenuData } from "./sideMenuData";
import { MenuItem } from "../MenuItem/MenuItem";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

function SideMenu({ open, onClose }: SideMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className={s.sideMenuWrapper}>
      <div className={s.sideMenu}>
        <button id={s["side-button"]}>Join Fiverr</button>
        <ul>
          {sideMenuData.map((item) => (
            <MenuItem
              mainMenuItem={{ title: item.title, link: item.link }}
              submenu={item.submenu}
            />
          ))}
          <div className={s.boldTitleSection}>
            <span>General</span>
            <hr />
          </div>

          {sideMenuBottom.map((item) => (
            <MenuItem
              mainMenuItem={{ title: item.title, link: item.link }}
              submenu={item.submenu}
            />
          ))}
        </ul>
      </div>

      <div className={s.overlay} onClick={onClose}></div>
    </div>
  );
}

export default SideMenu;
