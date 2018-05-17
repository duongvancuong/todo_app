import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

const warn = values => {
  const warnings = {}
  if (!isEmpty(values.title)) {
    if (values.title.lenght > 10) {
      warnings.title = "Seem the title too lenght...";
    }
  }
  return warnings
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "Reqiured"
  }
  if (!values.content) {
    errors.content = "Reqiured"
  }
  if (!values.category_id) {
    errors.category_id = "Reqiured"
  }
  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>
    <label htmlFor="lable">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const PostForm = props => {
  const { handleSubmit, pristine, reset, submitting, categories } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field name="content" type="text" component={renderField} label="Content Post" />
      <Field name="category_id" component="select">
        <option value="">Categories</option>
        {categories.map(category => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
      </Field>
      <div>
        <button disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

PostForm.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default reduxForm({
  form: 'postForm',
  validate,
  warn
})(PostForm);
