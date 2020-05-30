// CSS
import styles from './ExpandableBox.scss';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Constants
import { WEDDING_LOCATION_TITLE } from '../constants/general';

interface ExpandableBox {
  title: string;
  text: string;
}

const ExpandableBox = ({ title, text }) => {
  return (
    <ExpansionPanel className={styles.ExpandableBox}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls={title} id={title}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography align="center">
          {title === WEDDING_LOCATION_TITLE ? (
            <img src="/trouwlocatie.jpg" alt="Italian Trulli" width="250" height="200" />
          ) : (
            text
          )}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpandableBox;
