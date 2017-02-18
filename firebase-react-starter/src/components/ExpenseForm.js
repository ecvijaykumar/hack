import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Form } from 'grommet'

 import {
           renderButton,
           renderDate,
           renderTextField,
           renderComboField
        } from './CustomComponents'

import { expenseFieldsValidate } from '../lib/expense'

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
              type="submit"
            label="Add"/>
        </Form>
    )
}

export default reduxForm({
  form: 'expenseForm',
  expenseFieldsValidate,
})(ExpenseForm)
