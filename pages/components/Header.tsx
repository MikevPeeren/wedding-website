// CSS
import styles from './Header.scss';

// Constants
import { HEADER, SUBHEADER } from '../../constants/general';

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>{HEADER}</h1>
      <h2 className={styles.subHeader}>{SUBHEADER}</h2>
    </>
  );
};

export default Header;
