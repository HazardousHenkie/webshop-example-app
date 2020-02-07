import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { login } from '../App/actions'

import { makeSelectError } from 'containers/App/selectors'

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

const stateSelector = createSelector(makeSelectError(), error => ({
  error
}))

const SigninScheme = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email(),
  password: Yup.string()
    .required('Required')
    .min(6)
})

const LoginPage: React.FC = () => {
  const { error } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const submitForm = (values: Values) => {
    dispatch(login(values))
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
            isValid,
            handleChange,
            handleBlur,
            errors,
            handleSubmit,
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
                disabled={isSubmitting || !isValid}
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
