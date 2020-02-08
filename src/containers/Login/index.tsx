import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { useLocation } from 'react-router-dom'

import { login } from '../App/actions'

import { makeSelectError } from 'containers/App/selectors'
import { makeSelectLoggedIn } from 'containers/App/selectors'

import history from 'utils/history'
import { home } from 'utils/routes'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import {
  PaperWrapper,
  StyledPaper,
  StyledTypographyTitle,
  StyledLink,
  StyledSubmitButton
} from './styledComponents'

import ErrorMessage from 'components/ErrorMessage'

import { forgotPassword } from 'utils/routes'

interface Values {
  email: string
  password: string
}

const stateSelector = createStructuredSelector({
  error: makeSelectError(),
  loggedIn: makeSelectLoggedIn()
})

const SigninScheme = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email(),
  password: Yup.string()
    .required('Required')
    .min(6)
})

const LoginPage: React.FC = () => {
  const { loggedIn, error } = useSelector(stateSelector)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    if (loggedIn) {
      history.push(home)
    }
  }, [loggedIn])

  const submitForm = (values: Values) => {
    dispatch(login({ url: location.search.split('?next=')[1], values }))
  }

  return (
    <PaperWrapper>
      <StyledPaper variant="outlined">
        <StyledTypographyTitle align="center" variant="h1">
          Login
        </StyledTypographyTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SigninScheme}
          onSubmit={submitForm}
        >
          {({
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            errors,
            touched
          }) => (
            <Form>
              <TextField
                type="email"
                label="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email && errors.email}
                variant="outlined"
                fullWidth={true}
                margin="normal"
              />

              <TextField
                type="password"
                label="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.password && touched.password && errors.password
                }
                variant="outlined"
                fullWidth={true}
                margin="normal"
              />

              <Typography variant="body1">
                Forgot your Password?
                <StyledLink to={forgotPassword}>Reset password!</StyledLink>
              </Typography>

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={true}
                disabled={isSubmitting}
              >
                Login
              </StyledSubmitButton>
            </Form>
          )}
        </Formik>
        {error && <ErrorMessage errorMessage={error.toString()} />}
      </StyledPaper>
    </PaperWrapper>
  )
}

export default LoginPage
