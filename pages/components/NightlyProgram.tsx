// CSS
import styles from './NightlyProgram.scss';

// Constants
import { NIGHTLY_PROGRAM_TITLE, NIGHTLY_PROGRAM_TEXT } from '../../constants/general';

const NightlyProgram = () => {
  return (
    <div className={styles.nightlyProgram}>
      <h1 className={styles.nightlyProgram__title}>{NIGHTLY_PROGRAM_TITLE}</h1>
      <div className={styles.nightlyProgram__text} dangerouslySetInnerHTML={{ __html: NIGHTLY_PROGRAM_TEXT }} />
    </div>
  );
};

export default NightlyProgram;
