import SingleLineField from './FormFields/SingleLineField';

export const formFieldFormatter = (property) => {
  if(property.inputControlType === "SingleLineEdit") {
    return (
      <SingleLineField property={property} />
    );
  }

  if(property.inputControlType === "MultiLineEdit") {
    return (
      <SingleLineField property={property} multiline />
    );
  }

  return null;
}
