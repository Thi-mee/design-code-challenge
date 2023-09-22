import Text from "../Text";
import Container from "./Container";
import style from "./Layout.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.rows}>
          <div className={`${style.row} ${style.row_one}`}>
            <div className={`${style.col} ${style.col_one}`}>
              <div className={style.footer__logo}>

                get<Text variant="accent">linked</Text>
              </div>
            </div>
            <div className={`${style.col} ${style.col_two}`}></div>
            <div className={`${style.col} ${style.col_three}`}></div>
          </div>
          <div className={`${style.row} ${style.row_two}`}></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
