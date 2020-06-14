// CSS
import styles from './Header.scss';

// Constants
import { HEADER_BEFORE, HEADER_MIKE_AND_MONIKA, SUBHEADER } from '../../constants/general';

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>{HEADER_BEFORE}</h1>
      <h1 className={styles.header__MikeAndMonika}>{HEADER_MIKE_AND_MONIKA}</h1>
      <h2 className={styles.header__subHeader}>{SUBHEADER}</h2>
    </>
  );
};

export default Header;
