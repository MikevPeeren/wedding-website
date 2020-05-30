// CSS
import styles from './Header.scss';

// Constants
import { HEADER } from '../constants/general';

const Header = () => {
  return <h1 className={styles.title}>{HEADER}</h1>;
};

export default Header;
