import React from 'react'
import { Container,Input,Text,Button,Break } from "./styles/optform"

export default function Optform({children,...restProps}){
return<Container {...restProps}>{children}</Container>
}

Optform.Input=function OptFormInput({...restProps}){
    return <Input {...restProps}/>
}

Optform.Button=function OptFormButton({children,...restProps}){
    return (
    <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
    )
}

Optform.Text=function OptFormText({children,...restProps}){
return <Text {...restProps}>{children}</Text>
}

Optform.Break=function OptFormBreak({...restProps}){
    return <Break {...restProps}/>
}