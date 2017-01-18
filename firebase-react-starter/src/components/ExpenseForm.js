import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { AppBar, Paper, TextField, RaisedButton } from 'material-ui'

const renderTextField = ({input, label, meta: { touched, error}, ...custom}) => (
  <div>
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </div>
)

const renderButton = ({input, label, meta: { touched, error}, ...custom} ) => (
  <div>
    <RaisedButton label={label} primary={true} type="submit"
      {...custom}
    />
  </div>
)

const ExpenseForm = props => {
  const { handleSubmit } = props
    return (
      <Paper>
        <AppBar title="Add Expense" />
        <form onSubmit={handleSubmit}>
          <Field name="amount" component={renderTextField} label="Amount"/>
          <Field name="item" component={renderTextField} label="Item"/>
          <Field name="location" component={renderTextField} label="Spent at"/>
          <Field name="date" component={renderTextField} label="date"/>
          <Field name="submit" component={renderButton} label="New"
            style={{'width' : '100%'}}/>

        </form>
      </Paper>
    )
}

export default reduxForm({
  form: 'expenseForm'
})(ExpenseForm)
