import React from 'react';
import {Header,Profiles} from '../components';
import * as ROUTES from '../constant/routes'
import logo from "../logo.svg"

export function SelectProfileContainer({user,setProfile}){
    console.log(user)
    console.log(user.displayName)
    console.log(user.photoURL)
    console.log(user.email)
    return(       
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Titles>Who's Watching?</Profiles.Titles>
            <Profiles.User onClick={()=>setProfile({
                displayName:user.displayName,
                photoURL:"1"
            })}>
            <Profiles.Picture src={user.photoURL}></Profiles.Picture>
            <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles>
        </>
    )

}