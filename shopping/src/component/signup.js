import React from "react"
import {TextField,Paper,Grid,Typography,Button} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

const styles=theme=>({
    div:{
        paddingTop:"50px",
        paddingBottom:"50px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    paper:{
        padding: theme.spacing.unit * 3,
        // paddingBottom: theme.spacing.unit * 3,
    },
    add: {
        color: "white",
        // float: "left",
        marginTop: theme.spacing.unit * 2,
    }

})
 class Signup extends React.Component{
     constructor(props){
         super(props)
         this.state={
             name:"",
             phone:"",
             email:"",
             pas:"",
             cpas:""
         }
     }
      formsubmit=(e)=>{    
         e.preventDefault();
         if(this.state.pas===this.state.cpas)
         {
             let user={
                 name:this.state.name.value,
                 email:this.state.email,
                 phone:this.state.phone,
                 password:this.state.pas
                }
                console.log(user)
                let options={
                    method:"POST",
                    body:JSON.stringify(user),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
                fetch("/adduser",options)
                .then(res=>res.text())
                .then(res=>{alert(res);
                this.setState({
                    name:"",
                    phone:"",
                    email:"",
                    pas:"",
                    cpas:""
                }
                )
                })
                .catch(err=>console.log(err));
            }
            else{
                alert("password not match");
            }
     }



     changename=e=>
     this.setState({name:e.target.value})

     changephone=e=>
     this.setState({phone:e.target.value})

     changeemail=e=>
     this.setState({email:e.target.value})

     changepas=e=>
     this.setState({pas:e.target.value})

     changecpas=e=>
     this.setState({cpas:e.target.value})

     render(){
     const {classes} =this.props;
    return(
        <div className={classes.div}>
        <Grid lg={4}>
        <Paper className={classes.paper}>
        <Typography 
        variant="headline"
        color="secondary"
        style={{ textAlign: "center" }}
        >SIGN UP</Typography>
            <form onSubmit={this.formsubmit} >
            <TextField 
        label="Name"
        type="text"
         margin="normal"
         fullWidth={true}
        required
        autoFocus
        value={this.state.name}
        onChange={this.changename}
        >
        </TextField>
        <TextField 
        label="Phone"
        type="tel"
         margin="normal"
         fullWidth={true}
        required
        value={this.state.phone}
        onChange={this.changephone}
        >
        </TextField>
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
        <TextField 
        label="Confirm Password"
        type="password"
         margin="normal"
         fullWidth={true}
        required
        value={this.state.cpas}
        onChange={this.changecpas}
        >
        </TextField>
        <Button
        size="large"
        color="primary"
        variant="contained"
        className={classes.add}
        type="submit"
        >
        signup
        </Button>
        <span style={{float:"right",marginTop:"25px",}}>
        <Typography 
        variant="caption"
        style={{display:"inline"}}
        >
            Already Have Account 
        </Typography>
        <Link to="/login" style={{color:"orange",textDecoration:"none"}}>Login</Link>
        </span>
        </form>
        </Paper>
        </Grid>
        </div>
    )
     }
}
export default withStyles(styles)(Signup);