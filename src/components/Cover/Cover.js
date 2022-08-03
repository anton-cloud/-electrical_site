// import Container from "../Container";
// import styles from "./Cover.module.css";

// const Cover = () => {
//   return (
//     <section className={styles.section}>
//       <Container>
//         <div className={styles.wrapper}>
//           <p className={styles.subTitle}>Якісно, Швидко, Доступно</p>
//           <h1 className={styles.title}>Електромонтажні роботи в Києві</h1>
//           <a className={styles.btn}>Дізнатися більше</a>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Cover;

import { CoverStyled } from "./CoverStyled";

const Cover = () => {
  return (
    <CoverStyled>
      <div className="wrapper">
        <p className="subTitle">Якісно, Швидко, Доступно</p>
        <h1 className="title">Електромонтажні роботи в Києві</h1>
        <a className="btn">Дізнатися більше</a>
      </div>
    </CoverStyled>
  );
};

export default Cover;
