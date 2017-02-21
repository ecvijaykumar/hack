import React from 'react'
import { reduxForm, FormSection, Field } from 'redux-form'
import { Anchor, Form, Footer } from 'grommet'

import {renderButton } from './CustomComponents'

import { expenseFieldsValidate } from '../lib/expense'
import ExpenseFormSection from './ExpenseFormSection'

let ExpenseEditForm = props => {
  const {handleSubmit} = props
    return (
        <Form pad="small" onSubmit={handleSubmit} >
          <FormSection name='eform'>
              {ExpenseFormSection(props)}
          </FormSection>
          <Footer  pad={{"vertical": "medium"}} justify='between'>
            <Field name="submit" component={renderButton}
              onClick={handleSubmit}
              type="submit"
              label="Save"/>
              <Anchor label='Cancel'
                  animateIcon={true}
                  path='/showExpenses'
                  primary={true} />
          </Footer>
        </Form>
    )
}

ExpenseEditForm = reduxForm({
  form: 'expenseEditForm',
  enableReinitialize: true,
  expenseFieldsValidate,
})(ExpenseEditForm)

export default ExpenseEditForm
