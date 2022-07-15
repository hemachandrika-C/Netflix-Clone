import React,{useState} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {
    Container,
    Background,
    Group,
    Logo,
    ButtonLink,
    Feature,
    Text,
    FeatureCallOut,
    Link,
    Profiles,
    Dropdown,
    Picture,
    Search ,
    SearchIcon,
    SearchInput,
    PlayButton
    
    } from './styles/header' 

export default function Header({bg=true,children,...restProps}) {
return bg?<Background {...restProps}>{children}</Background>:children
}

Header.Frame=function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Group=function HeaderGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.Profiles=function HeaderProfiles({children,...restProps}){
    return <Profiles {...restProps}>{children}</Profiles>
}


Header.Picture=function HeaderPicture({src,...restProps}){
    return <Picture {...restProps}  src={`/images/users/${src}.png`} />
}


Header.Dropdown=function HeaderDropdown({children,...restProps}){
return <Dropdown {...restProps}  >{children}</Dropdown>
}


Header.ButtonLink=function HeaderButtonLink({children,...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo=function HeaderLogo({to,...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.Feature=function HeaderFeature({children,...restProps}){
return <Feature {...restProps}>{children}</Feature>

}

Header.Text=function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink=function HeaderTextLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
}
    
Header.FeatureCallOut=function HeaderFeatureCallOut({children,...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}
    

Header.Profiles= function HeaderProfile({ children, ...restProps }) {
    return <Profiles {...restProps}>{children}</Profiles>;
  };

Header.Search= function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive,setsearchActive]=useState(true)
    return (
    <Search {...restProps}>
       <SearchIcon onClick={()=>setSearchTerm(searchActive => !searchActive)}>
       <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
           value={searchTerm}
           onChange={({target})=>setSearchTerm(target.value)}
           placeHolder="search films and series"
           active={searchActive}
      
      />

    
    </Search>);
  };
  

  Header.PlayButton= function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };
  