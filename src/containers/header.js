import React from 'react'
import { Header } from '../components'
import * as Routes from './../constant/routes'
import logo from "./../logo.svg"

export  function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.HOME} alt="Netflix" src={logo}/>
                <Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>               
            </Header.Frame>
            {children}
        </Header>
    )
}


