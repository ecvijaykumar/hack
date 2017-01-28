import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Paper, TextField, RaisedButton, DatePicker, AutoComplete} from 'material-ui'


export const validate = values => {
  const errors = {}
  if (!values.amount) {
    errors.amount = 'You forgot to eneter amount'
  } else if (parseInt(values.amount, 10) >= 100000) {
    errors.amount = "That's a huge amount"
  }
  return errors
}

const renderTextField = ({input, label, meta: { touched, error}, style, ...custom}) => (
  <div style={style}>
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </div>
)

const renderButton = ({input, label, meta: { touched, error}, style, ...custom} ) => (
  <div style={style}>
    <RaisedButton label={label} primary={true} type="submit"
      {...custom}
    />
  </div>
)

const renderComboField = (props) => {
  const {
    src,
    label,
    style,
    input: { value, onChange }
  } = props
  if (src === undefined) return null
  console.log(src)
  return(
    <div style={style}>
    <AutoComplete
      floatingLabelText={label}
      searchText={value}
      openOnFocus={true}
      filter={AutoComplete.fuzzyFilter}
      dataSource={src}
      onUpdateInput={value => { console.log("AC ", value) ;
        onChange(value)
    }}
      maxSearchResults={5}
    />
  </div>
  )
}

const renderDate = props => {
  let maxDate = new Date()
  let minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() -1)
  const { style, input: { onChange}} = props


  return (
    <div style={style}>
    <DatePicker onChange={(unused, date) => onChange(date)}
      floatingLabelText="Spent On"
      defaultDate={maxDate}
      minDate={minDate}
      maxDate={maxDate}
      autoOk={true}
      container='inline'
    />
  </div>
  )
}

const ExpenseForm = props => {
  const { items, at, handleSubmit } = props

  const style = {
    formContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    form: {
      minHeight: 100,
      display: 'flex',
      alignItems: 'center'
    },
    fieldStyle: {
      padding: 20
    }
  }

    return (
      <Paper style={style.formContainer}>
        <form style={style.form} onSubmit={handleSubmit}>
          <Field name="amount" component={renderTextField}
              style={style.fieldStyle}
              label="Spent Amount ($)"/>
          <Field name="item" component={renderComboField}
              style={style.fieldStyle}
              src={items}
              label="for item" />
          <Field name="at" component={renderComboField}
              style={style.fieldStyle}
              src={at} label="at"/>

          <Field name="on" component={renderDate}
              style={style.fieldStyle}
              label="on date"/>
          <Field name="submit" component={renderButton}
            style={style.fieldStyle}
            label="Add"/>
        </form>
      </Paper>
    )
}

export default reduxForm({
  form: 'expenseForm',
  validate,
})(ExpenseForm)
