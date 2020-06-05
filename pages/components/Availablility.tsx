// React
import { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';

// Components
import AvailabilityModal from './AvailabilityModal';

// Constants
import { AVAILABILITY } from '../../constants/general';

const Availability = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleOpen();
        }}
      >
        {AVAILABILITY}
      </Button>
      <AvailabilityModal open={open} handleClose={handleClose} />
    </>
  );
};
export default Availability;
