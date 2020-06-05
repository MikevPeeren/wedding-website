// Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// CSS
import styles from './AvailabilityModal.scss';

// Constants
import {
  AVAILABILITY_HEADER,
  AVAILABILITY_TEXT,
  LABEL_NAME,
  LABEL_EMAIL,
  LABEL_PERSONS,
  LABEL_THERE,
  LABEL_NOT_THERE,
  FORM_CANCEL,
  FORM_SUBMIT,
} from '../../constants/general';

interface AvailabilityModalProps {
  open: boolean;
  handleClose: Function;
}
const AvailabilityModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      classes={{ paper: styles.availabilityModal }}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{AVAILABILITY_HEADER}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{AVAILABILITY_TEXT}</DialogContentText>
        <div>
          <TextField autoFocus margin="dense" id="name" label={LABEL_NAME} type="string" fullWidth />
          <TextField margin="dense" id="email" label={LABEL_EMAIL} type="email" fullWidth />
        </div>
        <br />
        <TextField margin="dense" id="aantal personen" label={LABEL_PERSONS} type="number" />
        <br />
        <br />
        <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} id="checkboxComing" name="checkboxComing" />
          }
          label={LABEL_THERE}
        />
        <FormControlLabel
          control={<Checkbox id="checkboxNotComing" name="checkboxNotComing" />}
          label={LABEL_NOT_THERE}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{FORM_CANCEL}</Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          {FORM_SUBMIT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvailabilityModal;
