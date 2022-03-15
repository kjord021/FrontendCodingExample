import Grid from '@mui/material/Grid';
import './App.css';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={10}>
          <SignUpForm />
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  );
}

export default App;
