// Constants
import { INTRODUCTION_FIRST } from '../../constants/general';

const Introduction = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p dangerouslySetInnerHTML={{ __html: INTRODUCTION_FIRST }} />
    </div>
  );
};

export default Introduction;
