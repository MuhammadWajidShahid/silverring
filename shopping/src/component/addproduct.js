import React, { Component } from "react";
import { Paper, TextField, Select, InputLabel, MenuItem, FormControl, IconButton, Grid, Typography, Button,Switch,FormControlLabel} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import { AddAPhoto, RemoveCircle } from "@material-ui/icons"
import {connect} from "react-redux"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,

    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        // width: 200,
        // display:"block"  
    },
    menuitem: {
        width: "800%"
    },
    formControl: {
        // margin: theme.spacing.unit,
        width: "50%",
        minWidth: 120,
    },
    iconbutton: {
        outline: "none",
    },
    addimage: {
        width: "90%",
        height: "150px",
        border: "2px orange solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: theme.spacing.unit,
        marginTop: 20,
        flexDirection: "column",
        cursor: "pointer"
        // flexWrap:"wrap"
    },
    imagediv: {
        display: "flex",
        flexWrap: "wrap"
    },
    add: {
        color: "white",
        float: "right",
        marginTop: theme.spacing.unit * 2,
    }
})
// let show = true;


class Addproduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: [0, 0, 0, 0],
            file: [0, 0, 0, 0],
            productname: "",
            des: "",
            price: "",
            dis: "",
            category: "",
            featured:false
        }
    }
    componentWillMount() {
        this.props.handleheading("Add Product")
    }

    image = (key) => {
        let files = document.querySelectorAll("input[type=file]");
        //    console.log(files)
        files[key].click()
        this.setState({ key: key });
    }
    inputimage = (e) => {
        var image = URL.createObjectURL(e.target.files[0]);
        this.state.image.splice(this.state.key, 1, image);
        // console.log(this.state.image)
        var file = this.state.file;
        var newfile = e.target.files[0];
        file.splice(this.state.key, 1, newfile);
        this.setState({ file: file })
        // console.log(this.refs.file.files);
    }
    removeimg = (key) => {
        this.state.image.splice(key, 1, 0);
        // console.log(this.state.image)
        var file = this.state.file;
        // var newfile = e.target.files[0];
        file.splice(key, 1, 0);
        this.setState({ file: file })
        console.log(file);
    }
    changeproduct = (e) =>
        this.setState({ productname: e.target.value })

    changedes = e =>
        this.setState({ des: e.target.value })

    changeprice = e =>
        this.setState({ price: e.target.value })

    changedis = e =>
        this.setState({ dis: e.target.value })

    changecat = e =>
        this.setState({ category: e.target.value })

        changefeatured=e=>
        this.setState({featured:e.target.checked})


    formsubmit = (e) => {
        e.preventDefault();
        let myfiles = [];
        this.state.file.map(file => {
            if (file !== 0)
                myfiles.push(file);
        })
        let data = new FormData(this.refs.myform);
        const state = this.state;
        // data.set('file',myfiles,"images");
        // data.append("images",myfiles);
        data.append("prodname", state.productname)
        data.append("des", state.des)
        data.append("price", state.price)
        data.append("disc", state.dis)
        data.append("cat", state.category);
        data.append("featured",state.featured)
        // console.log(data.get("images"));
        var options = {
            method: "POST",
            body: data,
        }
        fetch("/additem", options)
            .then(res => res.json())
            .then(res => {
                if(res.success)
                {
                    this.props.dispatch({type:"ADD_PRODUCT",payload:{
                        _id:res.prod._id,
                        categorey:res.prod.categorey,
                        desc:res.prod.desc,
                        disc:res.prod.disc,
                        images:res.prod.images,
                        price:res.prod.price,
                        productName:res.prod.productName,
                        featured:res.prod.featured
                    }})
                }
                // alert(res)
                this.setState({
                    image: [0, 0, 0, 0],
                    file: [0, 0, 0, 0],
                    productname: "",
                    des: "",
                    price: "",
                    dis: "",
                    category: "",
                })
            })
            .catch(err => console.log(err))


       

    }
    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.container} id="paper">
                <form ref="myform" encType="multipart/form-data" style={{ width: "90%" }} onSubmit={this.formsubmit}>
                    <Typography variant="h4" color="secondary" style={{ textAlign: "center" }}>Add Product</Typography>
                    <TextField
                        label="Product Name"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        fullWidth={true}
                        required
                        value={this.state.productname}
                        onChange={this.changeproduct}
                    ></TextField>
                    <br />
                    <TextField
                        label="Description"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        fullWidth={true}
                        required
                        value={this.state.des}
                        onChange={this.changedes}
                    ></TextField>
                    <br />
                    <TextField
                        label="Price"
                        type="number"
                        className={classes.textField}
                        margin="normal"
                        fullWidth={true}
                        inputProps={{
                            min: "1"
                        }
                        }
                        required
                        value={this.state.price}
                        onChange={this.changeprice}
                    ></TextField>
                    <br />
                    <TextField
                        label="Discount"
                        type="number"
                        className={classes.textField}
                        margin="normal"
                        fullWidth={true}
                        inputProps={{
                            min: "1",
                            max: "100"
                        }
                        }
                        value={this.state.dis}
                        onChange={this.changedis}
                    ></TextField>

                    <br />
                    <div style={{width:"100%"}}>
                    <FormControl className={classes.formControl}>
                        <InputLabel >Categories</InputLabel>
                        <Select
                            required
                            value={this.state.category}
                            onChange={this.changecat}
                        >
                            {/* <MenuItem value=""
                                className={classes.menuitem}
                            >
                                <em>None</em>
                            </MenuItem> */}
                            <MenuItem value={"earrings"} className={classes.menuitem}>Earrings</MenuItem>
                            <MenuItem value={"women ring"} className={classes.menuitem}>Women Ring</MenuItem>
                            <MenuItem value={"men ring"} className={classes.menuitem}>Men Ring</MenuItem>
                            <MenuItem value={"chains"} className={classes.menuitem}>Chains</MenuItem>
                            <MenuItem value={"bangles"} className={classes.menuitem}>Bangles</MenuItem>
                            <MenuItem value={"stones"} className={classes.menuitem}>Stones</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel
          control={
            <Switch
          checked={this.state.featured}
          onChange={this.changefeatured}
          color="primary"
        />
          }
          label="Featured"
          style={{marginTop:"15px",float:"right",marginRight:"40px"}}
        />
                    
                    </div>
                    <input type="file" accept="image/*" name="image1" style={{ display: "none" }} onChange={this.inputimage} />
                    <input type="file" accept="image/*" name="image2" style={{ display: "none" }} onChange={this.inputimage} />
                    <input type="file" accept="image/*" name="image3" style={{ display: "none" }} onChange={this.inputimage} />
                    <input type="file" accept="image/*" name="image4" style={{ display: "none" }} onChange={this.inputimage} />
                    <div className={classes.imagediv}>

                        {
                            this.state.image.map((img, index) => {
                                return (
                                    <Grid item md={3} sm={3} xs={6}>
                                        {
                                            (img === 0) ?
                                                (
                                                    <span className={classes.addimage}
                                                        key={index}
                                                        onClick={() => {
                                                            var key = index;
                                                            this.image(key)
                                                        }}>
                                                        <IconButton className={classes.iconbutton}>
                                                            <AddAPhoto ></AddAPhoto>
                                                        </IconButton>
                                                        <br />
                                                        <Typography variant="subtitle2" color="secondary">Add Photo</Typography>
                                                    </span>
                                                )
                                                :
                                                (
                                                    <span>
                                                        <IconButton size="small" style={{ position: "absolute", marginLeft: "10px", marginTop: "20px", outline: "none" }}
                                                            onClick={() => {
                                                                var key = index;
                                                                this.removeimg(key);
                                                            }}>
                                                            <RemoveCircle ></RemoveCircle>
                                                        </IconButton>
                                                        <span className={classes.addimage}>
                                                            <img src={img} style={{ width: "100%", height: "auto", overflow: "hidden" }} />
                                                        </span>
                                                    </span>
                                                )
                                        }
                                    </Grid>
                                )
                            })
                        }

                    </div>
                    <Button size="large"
                        color="primary"
                        variant="contained"
                        className={classes.add}
                        type="submit"
                    >Add Product</Button>

                </form>

            </Paper>


        )
    }

}
export default connect()(withStyles(styles)(Addproduct));