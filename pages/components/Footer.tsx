// CSS
import styles from './Footer.scss';

// Constants
import { FOOTER_TEXT } from '../constants/general';

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>{FOOTER_TEXT}</div>
    </>
  );
};

export default Footer;
