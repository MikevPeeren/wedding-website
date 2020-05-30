// CSS
import styles from './ExpandableBox.scss';

// Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ExpandableBox {
  title: string;
}

const ExpandableBox = ({ title }) => {
  const id = Math.random();
  return (
    <ExpansionPanel className={styles.ExpandableBox}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls={id.toString()} id={id.toString()}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpandableBox;
