import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CourseList from './components/CourseList'
import {  useDispatch } from 'react-redux';
import CourseListtable from './components/CourseListtable'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import {
  searchstringAsync
} from './components/stateSlice';
// import * as Redux from 'redux'
// import * as ReactRedux from 'react-redux'
// import * as contentful  from 'contentful'

// const SPACE_ID = 'o4l823wn8kw6'
// const ACCESS_TOKEN = 'G5pLDwGQch7dFSVLJkl0i_piTwr96U9S2zK_GOk9mhI'

// const client = contentful.createClient({
// space:SPACE_ID,
// accessToken:ACCESS_TOKEN
//     })


// async function getresults(searchString){
//   // let response = await  client.getEntries(
//   //   {
//   //     content_type:'course',
//   //     query:searchString
//   // })
//   // let results=response.items.map((item)=>(
//   //               {title:item.fields.title,
//   //                 author:item.fields.author,
//   //                 description:item.fields.description,
//   //                 url:item.fields.url})) 

//   // return results;
//   return ([{title:'a',
//   author:'a',
//   description:'a',
//   url:'a'},{title:'b',
//   author:'b',
//   description:'b',
//   url:'b'}])
// }
// const initialState={
//   courses:[]
// }
// let store = Redux.createStore(reducer);
// store.subscribe(() => console.log(store.getState()))

// function reducer(state=initialState,action){
//   console.log(`In Reducer : Answer: ${action.answer}`)
//   // console.log(`In Reducer: SearchString: ${state.searchString}`)
//   let itemslist=[]
// switch(action.type){
//    case 'SEARCH':
//       try{
        
//         let res =  getresults(action.answer)
//         res.then((item)=>console.log(item.map((a)=>itemslist.push(a))))
//       // console.log(itemslist.a.push())
      
//       //  client.getEntries(
         
//       //            {
//       //                content_type:'course',
//       //                query:action.answer
//       //            }
//       //        ).then((response)=>(
//       //          //item.fields.title
//       //          //author
//       //          //description
//       //          //url
//       //           response.items.map((item)=>console.log(
//       //             {title:item.fields.title,
//       //               author:item.fields.author,
//       //               description:item.fields.description,
//       //               url:item.fields.url}))      
//       //        ))
            
//              } catch(error){
//                  console.log(`Error: ${error}`)
//              }
//              console.log(`In SEARCH state:${itemslist}`)
//              return {
//                 ...state,
//                 courses:state.courses.push(itemslist)
//              }
//   default:return state
// }
// }


function App() {
  const dispatch = useDispatch();
  dispatch(searchstringAsync(''))
  return (
    
    <React.Fragment>
    <div>
      <PrimarySearchAppBar />
    {/* <NavBar /> */}
    {/* <CourseList  /> */}
    <CourseListtable />
    </div>
    </React.Fragment>
  );
}

export default App;
