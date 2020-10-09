// CSS
import styles from './Introduction.scss';

// Constants
import { INTRODUCTION_FIRST } from '../../constants/general';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_FIRST }} />
    </div>
  );
};

export default Introduction;
