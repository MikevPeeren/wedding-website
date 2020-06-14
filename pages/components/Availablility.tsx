// React
import { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

// CSS
import styles from './Availability.scss';

// Components
import AvailabilityModal from './AvailabilityModal';

// Constants
import { AVAILABILITY, SUCCESS_TEXT, SUCCESS_TEXT_TWO } from '../../constants/general';

const Availability = () => {
  const [open, setOpen] = useState(false);
  const [openSuccessMessage, setOpenSuccessMessage] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAlert = () => {
    setOpenSuccessMessage(false);
  };

  const handleSuccessApiCall = () => {
    setOpenSuccessMessage(true);
  };

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
      <AvailabilityModal open={open} handleClose={handleClose} handleSuccessApiCall={handleSuccessApiCall} />
      <Snackbar
        open={openSuccessMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={8000}
        onClose={handleCloseAlert}
      >
        <Alert icon={false} onClose={handleCloseAlert}>
          {SUCCESS_TEXT}
          <br />
          {SUCCESS_TEXT_TWO}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Availability;
