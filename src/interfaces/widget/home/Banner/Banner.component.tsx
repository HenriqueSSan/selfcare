import s from "./Banner.styles.module.scss";

export function Banner() {
  return (
    <section>
      <figure className={s["banner"]}>
        <img src="/promotion-banner.jpg" alt="" />
      </figure>
    </section>
  );
}
