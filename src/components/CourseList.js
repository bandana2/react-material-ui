import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  function handleclick(){
   console.log('a')
  }
function CourseList(){
    const classes = useStyles();
    const  mylist = useSelector(selectList)
    // let mylist=[]
    console.log(JSON.stringify(mylist))
    const dispatch = useDispatch();
            // console.log(`In CourseList:${courses}`)
        return(
                    <div>
        {mylist ? (
            <div>
                <TextField style={{padding: 24}}
                    id="searchInput"
                    placeholder="Search for Courses"   
                    margin="normal"
                    onChange={(event)=>dispatch(searchstringAsync(event.target.value))}
                    />
                    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Courses</ListSubheader>
        </GridListTile>
        {mylist.map((tile) => (
          <GridListTile key={tile.url}>
            <img src={tile.url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={()=>handleclick}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>

                {/* <Grid container spacing={1} style={{padding: 24}}>
                    {mylist.map(currentCourse => (
                        <Grid item xs={12} sm={6} lg={4} xl={3} key={currentCourse.title}>
                        <Course course={currentCourse} key={currentCourse.title} /> 
                        </Grid>
                    ))}
                </Grid> */}
            </div>
        ) : "No courses found" }
    </div>
        )
    }

export default CourseList;