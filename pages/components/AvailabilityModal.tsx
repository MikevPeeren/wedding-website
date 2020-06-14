// React
import { useState } from 'react';

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
  FIELD_EMPTY,
  INVALID_EMAIL,
  ERROR_TEXT,
} from '../../constants/general';

interface AvailabilityModalProps {
  open: boolean;
  handleClose: Function;
  handleSuccessApiCall: Function;
}
const AvailabilityModal = ({ open, handleClose, handleSuccessApiCall }) => {
  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [amountOfPersons, setAmountOfPersons] = useState(null);
  const [amountOfPersonsError, setAmountOfPersonsError] = useState(false);
  const [checkboxComing, setCheckboxComing] = useState(true);
  const [checkboxNotComing, setCheckboxNotComing] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async () => {
    if (!name) {
      setNameError(true);
      return;
    }

    if (!email) {
      setEmailError(true);
      setEmailErrorText(FIELD_EMPTY);
      return;
    }
    if (!amountOfPersons) setAmountOfPersonsError(true);

    const simpleEmailValidation = /\S+@\S+\.\S+/;
    const validEmail = simpleEmailValidation.test(email);

    if (email && !validEmail) {
      setEmailError(true);
      setEmailErrorText(INVALID_EMAIL);
      return;
    }

    if (nameError || emailError || amountOfPersonsError) return;

    const apiCall = await fetch(`/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        amountOfPersons: amountOfPersons,
        checkboxComing: checkboxComing,
      }),
    });

    if (apiCall.status === 200) {
      handleSuccessApiCall();
      handleClose();
    } else {
      setShowError(true);
    }
  };

  const handleNameChange = (event) => {
    setNameError(false);
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailError(false);
    setEmail(event.target.value);
  };

  const handleAmountOfPersons = (event) => {
    setAmountOfPersonsError(false);
    setAmountOfPersons(event.target.value);
  };

  const handleCheckboxComingChange = (event) => {
    setCheckboxComing(event.target.checked);
    setCheckboxNotComing(false);
  };

  const handleCheckboxNotComingChange = (event) => {
    setCheckboxNotComing(event.target.checked);
    setCheckboxComing(false);
  };

  return (
    <Dialog
      open={open}
      classes={{ paper: styles.availabilityModal }}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{AVAILABILITY_HEADER}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText classes={{ root: styles.availabilityModal__contentText }}>
          {AVAILABILITY_TEXT}
        </DialogContentText>
        <TextField
          id="name"
          margin="dense"
          autoFocus
          error={nameError}
          helperText={nameError && FIELD_EMPTY}
          label={LABEL_NAME}
          type="string"
          onChange={(event) => {
            handleNameChange(event);
          }}
          fullWidth
        />
        <TextField
          id="email"
          margin="dense"
          error={emailError}
          helperText={emailError && emailErrorText}
          label={LABEL_EMAIL}
          type="email"
          onChange={(event) => {
            handleEmailChange(event);
          }}
          fullWidth
        />
        <br />
        <br />
        <TextField
          id="amountOfPersons"
          margin="dense"
          error={amountOfPersonsError}
          helperText={amountOfPersonsError && FIELD_EMPTY}
          label={LABEL_PERSONS}
          type="number"
          onChange={(event) => {
            handleAmountOfPersons(event);
          }}
        />
        <br />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxComing}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              id="checkboxComing"
              name="checkboxComing"
              onChange={(event) => {
                handleCheckboxComingChange(event);
              }}
            />
          }
          label={LABEL_THERE}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxNotComing}
              id="checkboxNotComing"
              name="checkboxNotComing"
              onChange={(event) => {
                handleCheckboxNotComingChange(event);
              }}
            />
          }
          label={LABEL_NOT_THERE}
        />
        <br />
        <br />
        {showError && (
          <DialogContentText color="error" classes={{ root: styles.availabilityModal__errorText }}>
            {ERROR_TEXT}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{FORM_CANCEL}</Button>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          {FORM_SUBMIT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvailabilityModal;
