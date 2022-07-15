import React ,{useState,useContext,createContext} from 'react'
import {Container,Frame,Title,Item,Inner,Header,Body} from './styles/accordian'

const ToggleContext=createContext();

export default function Accordian({children,...restProps}){
return <Container {...restProps}>
    <Inner>
    {children}
    </Inner>
    </Container>
}


Accordian.Title=function AccordianTitle({children,...restProps}){
return <Title {...restProps}>{children}</Title>

}


Accordian.Frame=function AccordianFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordian.Item=function AccordianItem({children,...restProps}){
    const [toggleShow,settoggleShow]= useState(false)
    return (
    <ToggleContext.Provider value={{toggleShow,settoggleShow}}>
    <Item {...restProps}>
        {children}
    </Item>
    </ToggleContext.Provider>
    )
}

Accordian.Header=function AccordianHeader({children,...restProps}){ 
    const {toggleShow,settoggleShow}=useContext(ToggleContext);
    return (
        <Header onClick={() => settoggleShow((toggleShow)=>!toggleShow)} {...restProps}>
        {children}
        {toggleShow ?(
            <img src="/images/icons/close-slim.png" alt="close" />
        ):(
            <img src="/images/icons/add.png" alt="open" /> 
        )}
        </Header>
    )
}

Accordian.Body=function AccordianBody({children,...restProps}){
    const {toggleShow}=useContext(ToggleContext);

    return (toggleShow ?( <Body {...restProps}>
        {children}

    </Body>):null

    )
}