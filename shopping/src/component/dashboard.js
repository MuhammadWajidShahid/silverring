import React,{Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux"
const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
 class Dashboard extends Component{
     componentWillMount()
     {
         this.props.handleheading("Dashboard");
     }
     imag=(img)=>{
         img=JSON.parse(img);
         return(
             <img src={img[0]} style={{width:"50px",height:"50px"}}/>
         )
     }
     render(){
        const { classes ,products} = this.props;
         return(
            <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Product</CustomTableCell>
                  <CustomTableCell align="left">Name</CustomTableCell>
                  <CustomTableCell align="left">Description</CustomTableCell>
                  <CustomTableCell align="left">Price</CustomTableCell>
                  <CustomTableCell align="left">Categorey</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableRow className={classes.row} key={product._id}>
                    <CustomTableCell component="th" scope="row">
                      {this.imag(product.images)}
                    </CustomTableCell>
                    <CustomTableCell align="left"> {product.productName}</CustomTableCell>
                    <CustomTableCell align="left">{product.desc}</CustomTableCell>
                    <CustomTableCell align="left">{product.price}</CustomTableCell>
                    <CustomTableCell align="left">{product.categorey}</CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
    )
}
}
const mapStateToProps = (store) =>{
  return {
    products: store.productReducer,
  }
}
export default connect(mapStateToProps)(withStyles(styles)(Dashboard));