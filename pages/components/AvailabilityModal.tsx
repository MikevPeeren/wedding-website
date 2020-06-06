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
} from '../../constants/general';

interface AvailabilityModalProps {
  open: boolean;
  handleClose: Function;
}
const AvailabilityModal = ({ open, handleClose }) => {
  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  const [amountOfPersons, setAmountOfPersons] = useState(null);
  const [amountOfPersonsError, setAmountOfPersonsError] = useState(false);
  const [checkboxComing, setCheckboxComing] = useState(true);
  const [checkboxNotComing, setCheckboxNotComing] = useState(false);

  const handleSubmit = () => {
    if (!name) setNameError(true);
    if (!email) {
      setEmailError(true);
      setEmailErrorText('Dit veld moet ingevuld zijn');
    }
    if (!amountOfPersons) setAmountOfPersonsError(true);

    const simpleEmailValidation = /\S+@\S+\.\S+/;
    const validEmail = simpleEmailValidation.test(email);

    if (!validEmail) {
      setEmailError(true);
      setEmailErrorText('Dit is geen valide email');
    }

    if (nameError || emailError || amountOfPersonsError) return;

    fetch(`/api/availabilityHandler/${name}/${email}/${amountOfPersons}/${checkboxComing}`);
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
        <DialogContentText>{AVAILABILITY_TEXT}</DialogContentText>
        <TextField
          id="name"
          margin="dense"
          autoFocus
          error={nameError}
          helperText={nameError && 'Dit veld moet ingevuld zijn'}
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
          helperText={amountOfPersonsError && 'Dit veld moet ingevuld zijn'}
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
