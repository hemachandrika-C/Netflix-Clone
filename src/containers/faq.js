import React from 'react';
import FaqData from "./../fixtures/faqs.json"
import {Accordian} from "./../components"
import { Optform} from './../components';


export function FaqContainer(){
    return(
        <Accordian>
            <Accordian.Title>Frequently asked Questions</Accordian.Title>
            {
                FaqData.map((item)=>(
                    <Accordian.Item key={item.id}>
                        <Accordian.Header>{item.header}</Accordian.Header>
                        <Accordian.Body>{item.body}</Accordian.Body>
                    </Accordian.Item>
                ))
            }

            <Accordian.Item/>
            <Optform>
                <Optform.Input placeholder="Email Address" />
                <Optform.Button>Try it now</Optform.Button>
                <Optform.Text>Ready to watch?Enter your Email to create or restart your membership</Optform.Text>

            </Optform>
        </Accordian>
    )
}