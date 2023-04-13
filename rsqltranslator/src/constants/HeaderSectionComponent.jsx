import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SSMenuComponent from './SSMenuComponent';


function SSHeaderComponent() {
    return ( 
      <>
          <Row>
            <Col className='text-center py-3'><SSMenuComponent/></Col>
          </Row>
      </> 
    );
}

export default SSHeaderComponent;