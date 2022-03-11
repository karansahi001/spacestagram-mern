
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '15px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#550055',
    color: 'white',
    borderRadius: '20px',
    fontSize: '20px',
  },
  buttonClear: {
    borderRadius: '10px',
  }
}));
