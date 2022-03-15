import Logo from './logo20.png';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [npiNumber, setNPINumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    function handleSubmitFormClick(){
        alert('Successfully Submitted');
    }
    
    function SubmitButton() {

        if (firstName &&
            lastName &&
            telephoneNumber &&
            npiNumber &&
            emailAddress &&
            streetAddress &&
            city &&
            state &&
            zip) {
                return <Button variant="outlined" type='submit' onClick={handleSubmitFormClick}>Submit</Button>;
            }
        else {
            return <Button variant="outlined" type='submit' disabled onClick={handleSubmitFormClick}>Submit</Button>;
        }

    }
    

    return (
        <Paper elevation={3}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12} spacing={2}>
                    <img src={Logo} alt="logo" />
                    <Divider />
                </Grid>
                <Grid container xs={12} spacing={2} padding={2}>
                    <Grid item xs={12} spacing={2}>
                        <Typography variant="h5" gutterBottom component="div">
                            Personal Information
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={2} padding={2}>
                    <Grid item xs={4} spacing={2}>
                        <TextField required id="outlined-basic" label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={4} spacing={2}>
                        <TextField required id="outlined-basic" label="Last Name" variant="outlined" onChange={(e) => setlastName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={4} spacing={2}>
                        <TextField required id="outlined-basic" label="NPI Number" variant="outlined"  onChange={(e) => setNPINumber(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={2} padding={2}>
                    <Grid item xs={4} spacing={2}>
                        <TextField required id="outlined-basic" label="Telephone Number" variant="outlined"  onChange={(e) => setTelephoneNumber(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6} spacing={2}>
                        <TextField required id="outlined-basic" label="Email Address" variant="outlined"  onChange={(e) => setEmailAddress(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} spacing={2}>
                        <Divider />
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={2} padding={2}>
                    <Grid item xs={12} spacing={2}>
                        <Typography variant="h5" gutterBottom component="div">
                            Business Address Information
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={2} padding={2}>
                    <Grid item xs={3} spacing={1}>
                        <TextField required id="outlined-basic" label="Street Address" variant="outlined"  onChange={(e) => setStreetAddress(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3} spacing={1}>
                        <TextField required id="outlined-basic" label="City" variant="outlined"  onChange={(e) => setCity(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3} spacing={1}>
                        <TextField required id="outlined-basic" label="State" variant="outlined"  onChange={(e) => setState(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3} spacing={1}>
                        <TextField required id="outlined-basic" label="Zip" variant="outlined"  onChange={(e) => setZip(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} spacing={2}>
                        <Divider />
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={2} padding={2} justifyContent='center'>
                    <Grid item xs={2} spacing={2}>
                        <SubmitButton />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SignUpForm;