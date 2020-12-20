import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import * as contentful  from 'contentful'
import Course from './Course'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import {

    selectList,
    searchstringAsync
  } from '../components/stateSlice';
// const SPACE_ID = 'o4l823wn8kw6'
// const ACCESS_TOKEN = 'G5pLDwGQch7dFSVLJkl0i_piTwr96U9S2zK_GOk9mhI'

// const client = contentful.createClient({
// space:SPACE_ID,
// accessToken:ACCESS_TOKEN
//     })

// class CourseList extends React.Component{
    
//     constructor(){
//         super()
//         this.getCourses() 
//     }
//     state={
//         courses:[],
//         searchString:''
//     }
//     getCourses = async()=>{
//     try{    
//    let response = await client.getEntries(
//             {
//                 content_type:'course',
//                 query:this.state.searchString
//             }
//         )
//     response ? this.setState({courses: response.items}) :this.setState({courses: []})
//    console.log(`Response: ${response.items}`)
//         } catch(error){
//             console.log(`Error: ${error}`)
//         }
//     }

//     onSearchInputChange = (event)=>{
//         console.log("Search changed ..." + event.target.value)
//         if (event.target.value) {
//             this.setState({searchString: event.target.value})
//         } else {
//             this.setState({searchString: ''})
//         }
//         this.getCourses()
//     }
// render(){
//     return(
//         <div>
//         { this.state.courses ? (
//             <div>
//                 <TextField style={{padding: 24}}
//                     id="searchInput"
//                     placeholder="Search for Courses"   
//                     margin="normal"
//                     onChange={this.onSearchInputChange}
//                     />
//                 <Grid container spacing={1} style={{padding: 24}}>
//                     { this.state.courses.map(currentCourse => (
//                         <Grid item xs={12} sm={6} lg={4} xl={3} key={currentCourse.fields.title}>
//                         <Course course={currentCourse} key={currentCourse.fields.title} /> 
//                         </Grid>
//                     ))}
//                 </Grid>
//             </div>
//         ) : "No courses found" }
//     </div>
            
        
//     )
// }
// }

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

  function handleclick(){
   console.log('a')
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
function CourseListtable(){


  
    const classes = useStyles();
    const  mylist = useSelector(selectList)
    // let mylist=[]
    console.log(JSON.stringify(mylist))
    const dispatch = useDispatch();
            // console.log(`In CourseList:${courses}`)
        return(
          
          <div>
            <br></br>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
                           <TableRow>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Author</StyledTableCell>
                <StyledTableCell align="left">url</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {mylist.map((row) => (
                <StyledTableRow key={row.title}>
                 
                  <StyledTableCell align="left">{row.title}</StyledTableCell>
                  <StyledTableCell align="left">{row.author}</StyledTableCell>
                  <StyledTableCell align="left">{row.url}</StyledTableCell>
                                  </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        )
    }

export default CourseListtable;

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
