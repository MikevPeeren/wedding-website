// CSS
import styles from './Footer.scss';

// Constants
import { FOOTER_FIRST, FOOTER_SECOND } from '../constants/general';

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        {FOOTER_FIRST}
        <br />
        <br />
        {FOOTER_SECOND}
      </div>
    </>
  );
};

export default Footer;
