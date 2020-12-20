import {createSlice} from '@reduxjs/toolkit'
import * as contentful  from 'contentful'
// import { useSelector} from 'react-redux';
const SPACE_ID = 'o4l823wn8kw6'
const ACCESS_TOKEN = 'G5pLDwGQch7dFSVLJkl0i_piTwr96U9S2zK_GOk9mhI'

const client = contentful.createClient({
space:SPACE_ID,
accessToken:ACCESS_TOKEN
    })

    let initialdata = {
        test: async ()=>{let response = await  client.getEntries(
            {
              content_type:'course',
              query:''
          })
          let results=[]
        //   console.log(response)
        response.items.map((item)=>(results.push(
                            {title:item.fields.title,
                              author:item.fields.author,
                              description:item.fields.description,
                              url:item.fields.url})))
                            return results;
                            }
    }





    export const slice = createSlice(
{
    
    name:'search',
    initialState:{
      value: []
     },
    reducers:{
        searchstring:(state,action)=>{
            state.value=action.payload;
            console.log(initialdata.test());
            // console.log(`triggered searchstring:${JSON.stringify(state.value)}`)
        }
    }
}

)

export const {searchstring}=slice.actions

export const searchstringAsync = searchword => {
    console.log(`In Async Func: searchword: ${searchword}`)
    return async(dispatch,getState)=>{
        let response = await  client.getEntries(
            {
              content_type:'course',
              query:searchword
          })
          let results=[]
        response.items.map((item)=>(results.push(
                            {title:item.fields.title,
                              author:item.fields.author,
                              description:item.fields.description,
                              url:item.fields.url})))
                            // console.log(`In Async Func: results: ${JSON.stringify(results)}`)
                             
          dispatch(searchstring(results))

    }

    }
    export const selectList = state => state.search.value;
    export default slice.reducer;