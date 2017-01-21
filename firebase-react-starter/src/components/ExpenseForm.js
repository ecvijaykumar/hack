import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Paper, TextField, RaisedButton } from 'material-ui'

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
  const style = {
    formContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap'

    }
  }
    return (
      <Paper style={style.formContainer}>

        <form style={style.form} onSubmit={handleSubmit}>
          <Field name="amount" component={renderTextField} label="Amount"/>
          <Field name="item" component={renderTextField} label="Item"/>
          <Field name="location" component={renderTextField} label="Spent at"/>
          <Field name="date" component={renderTextField} label="date"/>
          <Field name="submit" component={renderButton} label="Add"
            style={{'width' : '100%'}}/>

        </form>
      </Paper>
    )
}

export default reduxForm({
  form: 'expenseForm'
})(ExpenseForm)
