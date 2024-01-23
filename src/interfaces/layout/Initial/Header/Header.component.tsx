import cartIcon from "../../../../assets/icons/cart.svg";
import userIcon from "../../../../assets/icons/user.svg";
import searchIcon from "../../../../assets/icons/search.svg";

import s from "./Header.styles.module.scss";

export function Header() {
  return (
    <header className={s["l-header"]}>
      <nav className={s["l-nav"]}>
        <a href="/">
          <figure>
            <img src="/logo-extend.svg" alt="Logo" />
          </figure>
        </a>

        <div className={s["group"]}>
          <button aria-label="">
            <img src={searchIcon} alt="" />
          </button>

          <button aria-label="">
            <img src={userIcon} alt="" />
          </button>

          <button aria-label="">
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}
