import React from 'react'

import {
          Button,
          DateTime,
          FormField,
          TextInput
       } from 'grommet'

export const renderTextField = ({
  label,
  meta: { touched, error},
  input: { name, value, onChange},
  ...custom}) => (
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


export const renderComboField = ({
  label,
  meta: { touched, error},
  input: { name, value, onChange},
  suggestions,
  ...custom}) => {

  return (
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
)}

export const renderButton = ({
  label,
  type,
  meta: { touched, error},
  onClick }) => (
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

export const renderDate = props => {
  const {
    input: { name, value, onChange} } = props
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
