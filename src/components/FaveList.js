import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Table
} from 'reactstrap';

function List(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1"><strong>My favorite stores</strong></AccordionHeader>
          <AccordionBody accordionId="1">
            <Table hover>
  <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Address
      </th>
      <th>
        
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      Red Barn Stores 3858-CUAJIMALPA
      </th>
      <td>
      JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210
      </td>
      <td>
        <Button>Delete</Button>
      </td>
      
    </tr>
  </tbody>
</Table>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}



export default List;