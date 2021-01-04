// Constants
import { HEADER_BEFORE, HEADER_MIKE_AND_MONIKA, SUBHEADER } from '../../constants/general';

const Header = () => {
  return (
    <>
      <h1 className="m-0 mt-4">{HEADER_BEFORE}</h1>
      <h1 className="m-0">{HEADER_MIKE_AND_MONIKA}</h1>
      <h2 className="mb-12">{SUBHEADER}</h2>
    </>
  );
};

export default Header;
