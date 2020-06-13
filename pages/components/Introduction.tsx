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
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_FIRST }} />
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_SECOND }} />
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_THIRD }} />
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_FOURTH }} />
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_FIFTH }} />
    </div>
  );
};

export default Introduction;
