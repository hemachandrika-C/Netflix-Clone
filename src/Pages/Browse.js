import React from 'react'
import selectionFilter from '../utils/selectionFilter'
import {BrowseDataseries} from "./../jsonData/jsondata"
import {josndatafilms} from "./../jsonData/jsondata"
import {BrowseContainer} from "./../containers/browse"



export default function Browse() {
    console.log(BrowseDataseries)
    console.log(josndatafilms)  

    const slides=selectionFilter(BrowseDataseries,josndatafilms)
    console.log(slides)

  
    return (
        <BrowseContainer slides={slides}/>
      
    )
}

