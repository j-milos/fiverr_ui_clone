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
  submenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <Link className="link" to={mainMenuItem.link}>
        <div className={s.menuTitleArrowWrapper}>
          {mainMenuItem.title}

          {submenu && (
            <div
              // Move this style to className
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
      {/* Delete this isOpen check, use css classes with isOpen variable */}
      {isOpen && submenu && submenu.length > 0 && (
        <ul
        //  className={clsx({ [s.active]: isOpen })}
        >
          {submenu.map((item) => {
            return (
              <li className={s.submenuStyle}>
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
