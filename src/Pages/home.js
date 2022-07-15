import React from 'react'
import {JumbotronContainer} from "./../containers/jumbotron";
import {FooterContainer} from "./../containers/footer"
import { FaqContainer} from "./../containers/faq"
import {HeaderContainer} from "./../containers/header"
import {Feature,Optform} from "./../components"

export default function Home() {
    return (
      <>
      <HeaderContainer >
      <Feature>
      <Feature.Title>
        Unlimited films,TV shows and more.
      </Feature.Title>
      <Feature.Subtitle>
        Watch anywhere.Cancel at any time.
      </Feature.Subtitle>
      <Optform>
                <Optform.Input placeholder="Email Address" />
                <Optform.Button>Try it now</Optform.Button>
                <Optform.Break />
                <Optform.Text>Ready to watch?Enter your Email to create or restart your membership</Optform.Text>

      </Optform>
      </Feature>    
      </HeaderContainer>
       <JumbotronContainer />
       <FaqContainer/>
       <FooterContainer />
     
      </>
    )
}


