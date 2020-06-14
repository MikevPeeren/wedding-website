// CSS
import styles from './WeddingLocation.scss';

// Constants
import { WEDDING_LOCATION_TITLE, WEDDING_LOCATION_TEXT } from '../../../constants/general';

const WeddingLocation = () => {
  return (
    <div className={styles.weddingLocation}>
      <h1 className={styles.weddingLocation__title}>{WEDDING_LOCATION_TITLE}</h1>
      <div className={styles.weddingLocation__text} dangerouslySetInnerHTML={{ __html: WEDDING_LOCATION_TEXT }} />
    </div>
  );
};

export default WeddingLocation;
