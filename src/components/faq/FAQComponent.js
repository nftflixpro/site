import React from 'react'
import { Accordion } from 'react-bootstrap';

export default function FAQComponent(props) {
    return (
            <div style={{paddingBottom:"20px"}}>
                    <Accordion className="faqs" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4>{props.title}</h4></Accordion.Header>
                        <Accordion.Body>
                        {props.body}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
    )
}
