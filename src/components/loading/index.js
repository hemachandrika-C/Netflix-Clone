import React from 'react'
import {Spinner, LockBody,ReleaseBody, Picture} from './style/loading'

export default function Loading({src,...restProps}){
    console.log(src)
  
    return (
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
    )
}

Loading.ReleaseBody=function LoadingReleaseBody(){
    return <ReleaseBody />
}