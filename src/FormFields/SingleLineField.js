import React from 'react';
import { TextField } from '@fluentui/react';
import { Controller, useFormContext } from 'react-hook-form';

const SingleLineField = ({ property, ...rest }) => {
  const { control, errors } = useFormContext();

  const { name, isRequired } = property;

  return (
    <Controller
      as={TextField}
      label={name}
      name={name}
      control={control}
      rules={{ required: isRequired }}
      required={isRequired}
      errorMessage={errors?.name}
      {...rest}
    />
  )
}

export default SingleLineField;
