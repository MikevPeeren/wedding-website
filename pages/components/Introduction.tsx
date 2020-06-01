// CSS
import styles from './Introduction.scss';

// Constants
import { INTRODUCTION_FIRST, INTRODUCTION_SECOND } from '../constants/general';

const Introduction = () => {
  return (
    <>
      <p className={styles.introductionFirst}>{INTRODUCTION_FIRST}</p>
      <br />
      <p className={styles.introductionSecond}>{INTRODUCTION_SECOND}</p>
      <br />
    </>
  );
};

export default Introduction;
