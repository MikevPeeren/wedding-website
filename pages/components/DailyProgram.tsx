// CSS
import styles from './DailyProgram.scss';

// Constants
import { DAILY_PROGRAM_TITLE, DAILY_PROGRAM_TEXT } from '../../constants/general';

const DailyProgram = () => {
  return (
    <div className={styles.dailyProgram}>
      <h1 className={styles.dailyProgram__title}>{DAILY_PROGRAM_TITLE}</h1>
      <div className={styles.dailyProgram__text} dangerouslySetInnerHTML={{ __html: DAILY_PROGRAM_TEXT }} />
    </div>
  );
};

export default DailyProgram;
