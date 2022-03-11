import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 12,
    backgroundColor: 'white',
    margin: '25px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#550055',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: '12px',
  },
  buttonCreate: {
    color: 'white',
    fontSize: '20px',
    borderRadius: '15px',
    justifyContent: 'center',
  },
  note: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '10px',
  }
}));
