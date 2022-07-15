import React from 'react';
//import {Jumbotron} from "../components/jumbotron"
import {Jumbotron} from "../components"
import JumboData from "../fixtures/jumbo.json"


export function JumbotronContainer() {
  return (
      <Jumbotron.Container>
        {JumboData.map(items=>(
          <Jumbotron key={items.id} direction={items.direction}>
            <Jumbotron.pane>
            <Jumbotron.title>{items.title}</Jumbotron.title>
            <Jumbotron.subtitle>{items.subTitle}</Jumbotron.subtitle>              
            </Jumbotron.pane>
            <Jumbotron.pane>
              <Jumbotron.Image src={items.image} alt={items.alt}/>
            </Jumbotron.pane>

          </Jumbotron>

        ))}
      </Jumbotron.Container>
    
   
  );
}

