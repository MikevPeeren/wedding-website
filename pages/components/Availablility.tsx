// React
import { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';

// CSS
import styles from './Availability.scss';

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
    <div className={styles.availability}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        fullWidth={true}
        onClick={() => {
          handleOpen();
        }}
        classes={{ label: styles.buttonLabel }}
      >
        {AVAILABILITY}
      </Button>
      <AvailabilityModal open={open} handleClose={handleClose} />
    </div>
  );
};
export default Availability;
