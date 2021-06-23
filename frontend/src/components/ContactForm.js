import React from 'react';

import styled from 'styled-components';

const ContactForm = () => {
   return (
        <Form id="contact-form" method="post">
            <Input>
              <label>Name:</label>
              <input type="text" />
            </Input>
            <Input>
               <label>Email:</label>
               <input type="email" />
            </Input>
            <Input>
              <label>Message:</label>
              <textarea rows='5' />
            </Input>
            <button type="submit">Submit</button>
        </Form>    
   )
}

const Input = styled.div `
  display: flex;
  flex-direction: column;
  min-width: 60vh;
  label {
    color: white;
    padding-top: 1rem;
  }
  input {
    border: 2px 0 solid yellow;
    padding: 12px 20px;
    width: 100%;
    height: 100%;
  }
  textarea {
   width: 100%;
   padding: 12px 20px;
   box-align: border-box;
   border: 2px solid #cccc;
   border-radius: 4px;
   background-color: #f8f8f8;
   resize: none;
  }
`;
const Form = styled.form `
  button {
    margin-top: 1rem;
  }
`;

export default ContactForm;