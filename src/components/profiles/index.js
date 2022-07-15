import React from 'react';
import {Container,Title ,List,Picture,Name,Item} from "./styles/profiles"

export default function Profiles({children,...restProps}){
return<Container {...restProps}>{children}</Container>
}


Profiles.Titles=function ProfilesTitles({children,...restProps})
{
    return<Title {...restProps}>{children}</Title>

}


Profiles.List=function ProfilesList({children,...restProps})
{
    return<List {...restProps}>{children}</List>

}

Profiles.User=function ProfilesUser({children,...restProps})
{
    return<Item {...restProps}>{children}</Item>

}


Profiles.Picture=function ProfilesPicture({src,...restProps})
{
    console.log(src)
    return<Picture {...restProps} src={src ? `/images/users/${src}.png`:`/images/users/1.png`} />
}


Profiles.Name=function ProfilesName({children,...restProps})
{
    return<Name {...restProps}>{children}</Name>

}