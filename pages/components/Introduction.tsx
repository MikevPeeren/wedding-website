// CSS
import styles from './Introduction.scss';

// Constants
import { INTRODUCTION } from '../constants/general';

const Introduction = () => {
  return <p className={styles.introduction}>{INTRODUCTION}</p>;
};

export default Introduction;
