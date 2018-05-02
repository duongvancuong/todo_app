import React from 'react';
import FormError from './FormError';
import { isEmpty } from 'lodash';

const FormInput = ({ type, onChange, onBlur, name, value, placeHolder, errorsField }) => {
  const errorField = errorsField.find((item) => item.type === name);
  return (
    <div>
      <input
        type={type}
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        onBlur={onBlur}
        required=""
        autoFocus="" />
      {isEmpty(errorField) || isEmpty(value) ? null : <FormError isHidden={isEmpty(errorField)} errorMessage={errorField.message} />}
    </div>
  )
}

export default FormInput;
