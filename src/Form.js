import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { Button } from '@fluentui/react';
import { formFieldFormatter } from './helpers';

// dumb way of initializing form, later on do it by inputControlType (switch or sth)
const mapSchemaIntoDefaultValues = (schema) => {
  if(!schema || !schema.length) {
    return {};
  }

  return schema.reduce((property, obj) => {
    obj[property] = '';

    return obj;
  }, []);
}

function Form({ schema }) {
  const formMethods = useForm({
    defaultValues: mapSchemaIntoDefaultValues(schema),
  });
  const {
    handleSubmit,
  } = formMethods;


  const onSubmit = (values) => {
    console.log(values);

    // POST /v4/Designs
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        { schema.map(formFieldFormatter)}
        <Button type="submit"> Submit </Button>
      </form>
    </FormProvider>
  );
}

export default Form;
