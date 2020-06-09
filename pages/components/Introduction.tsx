// CSS
import styles from './Introduction.scss';

// Constants
import {
  INTRODUCTION_FIRST,
  INTRODUCTION_SECOND,
  INTRODUCTION_THIRD,
  INTRODUCTION_FOURTH,
  INTRODUCTION_FIFTH,
} from '../../constants/general';

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <p className={styles.introduction__first}>{INTRODUCTION_FIRST}</p>
      <p className={styles.introduction__second}>{INTRODUCTION_SECOND}</p>
      <p className={styles.introduction__third}>{INTRODUCTION_THIRD}</p>
      <p className={styles.introduction__fourth}>{INTRODUCTION_FOURTH}</p>
      <p className={styles.introduction__fifth}>{INTRODUCTION_FIFTH}</p>
    </div>
  );
};

export default Introduction;
