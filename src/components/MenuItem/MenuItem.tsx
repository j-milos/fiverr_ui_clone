import s from "./MenuItem.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

export interface MenuItemElement {
  title: string;
  link: string;
}

interface MenuItemProps {
  mainMenuItem: MenuItemElement;
  submenu?: MenuItemElement[];
}

export const MenuItem: React.FC<MenuItemProps> = ({
  mainMenuItem,
  submenu = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <Link className="link" to={mainMenuItem.link}>
        <div className={s.menuTitleArrowWrapper}>
          {mainMenuItem.title}

          {submenu.length > 0 && (
            <div
              className={s.arrowDiv}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((state) => !state);
              }}
            >
              <FontAwesomeIcon
                className={clsx({ [s.open]: isOpen })}
                icon={faChevronDown}
              />
            </div>
          )}
        </div>
      </Link>

      {submenu.length > 0 && (
        <ul className={clsx(s.submenu, { [s.active]: isOpen })}>
          {submenu.map((item) => {
            return (
              <li key={item.title} className={s.submenuStyle}>
                <Link className="link" to={item.link}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
