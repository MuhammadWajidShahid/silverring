import React from "react"
import { TextField, Paper, Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const styles = theme => ({
    div: {
        paddingTop: "50px",
        paddingBottom: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing.unit * 3,
        // paddingBottom: theme.spacing.unit * 3,
    },
    add: {
        color: "white",
        // float: "left",
        marginTop: theme.spacing.unit * 2,
    }

})
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pas: ""
        }
    }

    formsubmit = (e) => {
        e.preventDefault();
        let user = {
            username: this.state.email,
            password: this.state.pas
        }
        if(user.username==="wajid.shahid@yahoo.com"&&user.password==="silverring543")
        {
           this.refs.admin.click();
        }
        else
        {

            let options = {
                method: "POST",
                body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("/login", options)
            .then(res => res.text())
            .then(res => {
                if(res==="loggedin")
                {
                    this.refs.checkout.click()
                }
                // alert(res);
            })
            .catch(err => console.log(err));
        }
    }

    changeemail = e =>
        this.setState({ email: e.target.value })


    changepas = e =>
        this.setState({ pas: e.target.value })

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.div}>
                <Grid lg={4}>
                    <Paper className={classes.paper}>
                    <Link to="/admin"  ><p style={{display:"none"}} ref="admin">admin</p></Link>
                    <Link to="/checkout"  ><p style={{display:"none"}} ref="checkout">admin</p></Link>
                        <Typography
                            variant="headline"
                            color="secondary"
                            style={{ textAlign: "center" }}
                        >LOG IN</Typography>
                        <form onSubmit={this.formsubmit}>
                            <TextField
                                label="Email"
                                type="email"
                                margin="normal"
                                fullWidth={true}
                                required
                                value={this.state.email}
                                onChange={this.changeemail}
                            >
                            </TextField>
                            <TextField
                                label="Password"
                                type="password"
                                margin="normal"
                                fullWidth={true}
                                required
                                value={this.state.pas}
                                onChange={this.changepas}
                            >
                            </TextField>
                            <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                className={classes.add}
                                type="submit"
                            >
                                Login
        </Button>
                            <span style={{ float: "right", marginTop: "25px", }}>
                                <Typography
                                    variant="caption"
                                    style={{ display: "inline" }}
                                >
                                    Not Have Account Yet
        </Typography>
                                <Link to="/signup" style={{ color: "orange", textDecoration: "none" }}>Signup</Link>
                            </span>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Login);