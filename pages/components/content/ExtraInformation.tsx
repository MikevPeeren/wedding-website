// CSS
import styles from './ExtraInformation.scss';

// Constants
import { EXTRA_INFORMATION_TITLE, EXTRA_INFORMATION_TEXT } from '../../../constants/general';

const ExtraInformation = () => {
  return (
    <div className={styles.extraInformation}>
      <h1 className={styles.extraInformation__title}>{EXTRA_INFORMATION_TITLE}</h1>
      <div className={styles.extraInformation__text} dangerouslySetInnerHTML={{ __html: EXTRA_INFORMATION_TEXT }} />
    </div>
  );
};

export default ExtraInformation;
