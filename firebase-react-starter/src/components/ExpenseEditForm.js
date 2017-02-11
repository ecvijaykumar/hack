import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {
          Button,
          DateTime,
          Form,
          FormField,
          TextInput
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

const renderButton = ({label, type, meta: { touched, error}, onClick }) => (
  <FormField>
    <Button accent={true}
      fill={true}
      label={label}
      type={type}
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

let ExpenseEditForm = props => {
  const { items, at, handleSubmit, onCancel } = props
    return (
        <Form pad="small" compact={true} onSubmit={handleSubmit} >
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
            type="submit"
            label="Save"/>

          <Field name="cancel" component={renderButton}
            onClick={onCancel}
            label="Cancel"/>

        </Form>
    )
}

ExpenseEditForm = reduxForm({
  form: 'expenseEditForm',
  validate,
})(ExpenseEditForm)

export default ExpenseEditForm
