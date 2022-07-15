import React ,{useState,useEffect} from 'react';
import {SelectProfileContainer} from './profiles';
import {Header,Loading,Card,Player} from "../components"
import {useAuthListener} from "./../hooks/index"
import * as Routes from "./../constant/routes"
import logo from "./../logo.svg"
import firebase from "./../lib/firebase.prod"
import { FooterContainer} from "./../containers/footer"
import Fuse from 'fuse.js'




export function BrowseContainer({slides}){
 //   const user=firebase.auth().currentUser.displayName
 const {user}=useAuthListener();
console.log(user)
// console.log(user.displayName)
// console.log(user.displayName)
console.log(slides)

const [profile,setProfiles]=useState({})
const [loading,setloading]=useState(true)
const [searchTerm,setSearchTerm] = useState('')
const [category,setCategory]=useState('series')
const [slideRows, setslideRows] = useState([])

console.log(slideRows)

useEffect(()=>{
    console.log(profile)
    setTimeout(()=>{
        setloading(false);
    },3000)
},[profile.displayName])


useEffect(()=>{
    setslideRows(slides[category])
},[slides,category])
  
console.log(profile.displayName)
console.log(profile.photoURL)
console.log(loading)
console.log(slideRows)


useEffect(()=>{
    const fuse=new Fuse(slideRows,{
        keys:['data.description','data.title','data.genre']
    })  

    const result=fuse.search(searchTerm).map(({item})=>item);

    if(slideRows.length >0 && searchTerm.length>3 && result.length>0){
        setslideRows(result)
    }else{
        setslideRows(slides[category])
    }
},[searchTerm])



return  profile.displayName ?(
    <>
    {loading ?(
    <Loading src={profile.photoURL} />)
    :
        null
    
    }

    <Header src="joker1">
       <Header.Frame>
           <Header.Group>
           <Header.Logo to={Routes.HOME} src={logo} alt="Netlfix" />
           <Header.TextLink active={category === 'series' ? 'true' :'false'} onClick={()=>setCategory('series')}>Series</Header.TextLink>
           <Header.TextLink active={category === 'films' ? 'true' :'false'} onClick={()=>setCategory('films')}>films</Header.TextLink>
           </Header.Group>
           <Header.Group>
               <Header.Search
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                  />
               <Header.Profiles>
                   <Header.Picture src={profile.photoURL} />
                   <Header.Dropdown>
                       <Header.Group>
                           <Header.Picture src={profile.photoURL}/>
                           <Header.TextLink>{user.displayName}</Header.TextLink>
                       </Header.Group>
                       <Header.Group>
                           <Header.TextLink onClick={()=>firebase.auth().signOut()}>Sign Out</Header.TextLink>
                       </Header.Group>

                   </Header.Dropdown>
               </Header.Profiles>
           </Header.Group>
       </Header.Frame>
        <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now.</Header.FeatureCallOut>
            <Header.Text>
               Ancient music refers to the musical systems that were developed in the ancient past, literate cultures, including Mesopotamia, India, Persia, Egypt, China, Greece, and Rome, which replaced prehistoric music.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
    </Header>

    <Card.Group>
        {slideRows.map((items)=>(
            <Card key={`${category}-${items.title.toLowerCase()}`}>
                <Card.Title>{items.title}</Card.Title>
                <Card.Entities>
                    {items.data.map((item)=>(
                        <Card.Item  key={item.id} item={item}>
                            <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                           
                            <Card.Meta>
                                <Card.SubTitle>{item.title}</Card.SubTitle>
                                <Card.Text>{item.description}</Card.Text>                              
                            </Card.Meta>
                        </Card.Item>
                    ))}
                </Card.Entities>
              
                
                <Card.Feature category={category}>   
                

                {/*            
                   
                */}

                 
                </Card.Feature>
               
            </Card>
        ))}


    </Card.Group>
    <FooterContainer />
    </>
    ):
  <SelectProfileContainer user={user} setProfile={setProfiles}/>
 





/*
return  profile.displayName ?(
         <>
         {loading ?(
         <Loading.ReleaseBody />
         ):(
         <Loading src={profile.photoURL} />)}

         <Header src="joker1"><p>Hello</p></Header>
         </>
         ):
       <SelectProfileContainer user={user} setProfile={setProfiles}/>

*/
//return <p>Hello from the browser {user.displayName}</p>
}