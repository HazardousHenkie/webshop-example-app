import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Formik, Form } from 'formik'

import * as Yup from 'yup'

import TextField from '@material-ui/core/TextField'
import InfoMessage from 'components/InfoMessage'

import {
  PaperWrapper,
  StyledPaper,
  StyledTypographyTitle,
  StyledSubmitButton
} from 'containers/Login/styledComponents'

import { createStructuredSelector } from 'reselect'

import { sendPasswordResetEmail } from './actions'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import reducer from './reducer'
import saga from './saga'

import { makeSelectError, makeSelectMessage } from './selectors'

const ForgotPasswordscheme = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email()
})

interface Values {
  email: string
}

const key = 'passwordrequest'

const stateSelector = createStructuredSelector({
  message: makeSelectMessage(),
  error: makeSelectError()
})

const ForgotPassword: React.FC = () => {
  const { message, error } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const submitForm = (values: Values) => {
    dispatch(sendPasswordResetEmail(values))
  }

  return (
    <PaperWrapper>
      <StyledPaper variant="outlined">
        <StyledTypographyTitle align="center" variant="h1">
          Forgot password
        </StyledTypographyTitle>
        do something to go to login
        {message && <InfoMessage severity="info" message={message} />}
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordscheme}
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

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth={true}
                disabled={isSubmitting}
              >
                Reset password
              </StyledSubmitButton>
            </Form>
          )}
        </Formik>
        {error && <InfoMessage severity="error" message={error.toString()} />}
      </StyledPaper>
    </PaperWrapper>
  )
}

export default ForgotPassword
