import * as React from 'react';
import {Formik, Form, Field} from 'formik';
import Router from 'next/router';
import {
  Button,
  LinearProgress
} from '@material-ui/core';
import {
  TextField
} from 'formik-material-ui';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Box from '@material-ui/core/Box';

interface Values {
  email: string;
  password: string;
}

const customData = require('./logindata.json');

const Login = () => (
  <Formik 
    initialValues={{
      email: '',
      password: ''
    }}
    validate={values => {
      const errors: Partial<Values> = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if(values.password != customData.password){
        errors.password = 'Invalid Password';
      }
      if(values.email != customData.email){
        errors.email = 'Email not exist';
      }
      if(!values.password){
        errors.password = 'Invalid Password';
      }
      return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
      
      if(customData.email == values.email && customData.password == values.password)
      {
          Router.push('/dashboard');
      }
    }}
    render={({submitForm, isSubmitting, touched, errors}) => (
        
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
          <Box margin={1}>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
          </Box><br/>
          {isSubmitting && <LinearProgress />}
          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Log in
            </Button>
          </Box>
        </Form>
      </MuiPickersUtilsProvider>
    )}
  />
);

export default Login;