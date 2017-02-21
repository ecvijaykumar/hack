import React from 'react'
import { reduxForm, FormSection, Field } from 'redux-form'
import { Anchor, Form, Footer } from 'grommet'

 import { renderButton    } from './CustomComponents'
import ExpenseFormSection from './ExpenseFormSection'

import { expenseFieldsValidate } from '../lib/expense'

const ExpenseForm = props => {
  const { handleSubmit } = props
    return (
        <Form
            pad='small'
            onSubmit={handleSubmit}>
            <FormSection name='eform'>
                {ExpenseFormSection(props)}
            </FormSection>

            <Footer  pad={{"vertical": "medium"}} justify='between'>
              <Field name="submit" component={renderButton}
                onClick={handleSubmit}
                  type="submit"
                label="Add"/>
              <Anchor label='See Expenses'
                  animateIcon={true}
                  path='/showExpenses'
                  primary={true} />
             </Footer>
        </Form>
    )
}

export default reduxForm({
  form: 'expenseForm',
  expenseFieldsValidate,
})(ExpenseForm)
