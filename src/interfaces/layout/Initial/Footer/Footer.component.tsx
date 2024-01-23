import facebookIcon from "../../../../assets/icons/facebook.svg";
import instagramIcon from "../../../../assets/icons/instagram.svg";

import s from "./Footer.styles.module.scss";

export function Footer() {
  return (
    <footer className={s["l-footer"]}>
      <div className={`${s["group-1"]}`}>
        <div className="container">
          <ul className={s["list"]}>
            <li>
              <a href="/">Contato</a>
            </li>

            <li>
              <a href="/">Termos de serviço</a>
            </li>

            <li>
              <a href="/">Política de privacidade</a>
            </li>

            <li>
              <a href="/">Cancelamento, troca e reembolso</a>
            </li>
          </ul>
          <form className={s["newsletter"]}>
            <fieldset>
              <label htmlFor="">Newsletter</label>

              <div>
                <input type="text" placeholder="Digite seu melhor e-mail" />
                <button className="btn btn-primary btn-solid">Inscrever</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div className={s["group-2"]}>
        <div className="container">
          <div className={s["social"]}>
            <div>
              <img src={instagramIcon} alt="" />
            </div>
            <div>
              <img src={facebookIcon} alt="" />
            </div>
          </div>

          <div className={s["payment"]}>
            <div>
              <img src="/brand/mastercard.png" alt="" />
            </div>
            <div>
              <img src="/brand/paypal.png" alt="" />
            </div>
            <div>
              <img src="/brand/visa.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
