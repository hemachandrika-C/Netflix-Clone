import React from 'react'
import {Container,Item,Inner,Pane,Title,Subtitle,Image} from './styles/jumbotron'

export default function Jumbotron({children,direction,...restProps}) {
    return (
       <Item {...restProps}>
           <Inner direction={direction}>
           {children}
           </Inner>
       </Item>
    )
}

Jumbotron.Container=function JumbotronContainer({children,...restProps}){
    console.log(children)
   
return <Container {...restProps}> {children}</Container>
}

Jumbotron.pane=function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
    }

Jumbotron.title=function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
    }

Jumbotron.subtitle=function JumbotronSubtitle({children,...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
    }


Jumbotron.Image=function JumbotronImage({...restProps}){
    return <Image {...restProps}/>
    }


