import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Paper, TextField, RaisedButton, DatePicker, AutoComplete} from 'material-ui'

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

const renderComboField = (props) => {

  const {
    src,
    label,

    input: { value, onChange }
  } = props
  if (src === undefined) return null
  return(
    <AutoComplete
      hintText={label}
      searchText={value}
      filter={AutoComplete.fuzzyFilter}
      dataSource={src}
      onUpdateInput={value => onChange(value)}
      maxSearchResults={5}
    />
  )
}

const renderDate = props => {
  let maxDate = new Date()
  let minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() -1)
  const { input: { onChange}} = props

  return (
    <DatePicker onChange={(unused, date) => onChange(date)}
      floatingLabelText="Spent On"
      defaultDate={maxDate}
      minDate={minDate}
      maxDate={maxDate}
      autoOk={true}
    />
  )
}

const ExpenseForm = props => {
  const { items, at, handleSubmit } = props

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
          <Field name="amount" component={renderTextField} label="Spent $"/>
          <Field name="item" component={renderComboField} src={items} label="for item" />
          <Field name="at" component={renderComboField} src={at} label="at"/>
          <Field name="on" component={renderDate} label="on date"/>
           <Field name="submit" component={renderButton} label="Add"
            style={{'width' : '100%'}}/>

        </form>
      </Paper>
    )
}

export default reduxForm({
  form: 'expenseForm'
})(ExpenseForm)
