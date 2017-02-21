import React from 'react'
import { Field } from 'redux-form'
import {
          renderDate,
          renderTextField,
          renderComboField
       } from './CustomComponents'

import { Header, Heading, Section} from 'grommet'

const ExpenseFormSection = (props) => {
  const {items, at, title} = props
    return (
        <Section>
            <Header>
               <Heading>
                  {title}
               </Heading>
             </Header>
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
            </Section>
    )
}

export default ExpenseFormSection
