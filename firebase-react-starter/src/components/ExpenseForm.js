import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {
          Button,
          Form,
          FormField,
          NumberInput,
          TextInput,
          DateTime
       } from 'grommet'


export const validate = values => {
  const errors = {}
  if (!values.amount) {
    errors.amount = 'You forgot to eneter amount'
  } else if (parseInt(values.amount, 10) >= 100000) {
    errors.amount = "That's a huge amount"
  }
  return errors
}

/*
const renderNumberField = ({name, label, meta: { touched, error},
                          input: { value, onChange}, ...custom}) => (
  <FormField error={touched && error} >
    <NumberInput id={name}
      name={label}
      placeHolder={label}
      onChange={onChange}
      value={value}
      {...custom}
      max={10000}
      min={0}
    />
  </FormField>
)
*/


const renderTextField = ({name, label, meta: { touched, error},
                          input: { value, onChange}, ...custom}) => (
  <FormField error={touched && error} >
    <TextInput id={name}
      name={label}
      placeHolder={label}
      onDOMChange={onChange}
      value={value}
      {...custom}
    />
  </FormField>
)


const renderComboField = ({name, label, meta: { touched, error},
                          input: { value, onChange},
                          suggestions, ...custom}) => (
  <FormField error={touched && error} >
    <TextInput id={name}
      name={label}
      placeHolder={label}
      onDOMChange={onChange}
      value={value}
      suggestions={suggestions}
      onSelect={(e) => onChange(e.suggestion)}
      {...custom}
    />
  </FormField>
)

const renderButton = ({label, meta: { touched, error}, onClick }) => (
  <FormField>
    <Button accent={true}
      fill={true}
      label={label}
      type="submit"
      onClick={onClick}
      primary={true}
    />
  </FormField>
)

const renderDate = props => {
  const { name, input: { value, onChange} } = props
  return (
    <FormField>
      <DateTime onChange={(e) => onChange(e)}
        format="M/D/YYYY"
        id={name}
        name={name}
        value={value}
      />
    </FormField>

  )
}

const ExpenseForm = props => {
  const { items, at, handleSubmit } = props
    return (
        <Form pad="small" compact={true} onSubmit={handleSubmit}>
          <Field name="amount" component={renderTextField}
              label="Spent Amount ($)"/>
          <Field name="item" component={renderComboField}
              suggestions={items}
              label="for item" />
          <Field name="at" component={renderComboField}
              suggestions={at}
              label="at"/>
          <Field name="on" component={renderDate}
              label="on"/>

          <Field name="submit" component={renderButton}
            onClick={handleSubmit}
            label="Add"/>
        </Form>

    )
}

export default reduxForm({
  form: 'expenseForm',
  validate,
})(ExpenseForm)
