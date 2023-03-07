import React, { useState } from 'react';

interface IProps {
  fields: any;
}

const useForm = ({ fields }: IProps) => {
  const [form, setForm] = useState(fields);
  const [initForm, setInitForm] = useState(fields);

  React.useEffect(() => {
    console.log(form);
  }, [form]);

  const handleInputChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSetFormValueToEdit = (value: any) => {
    setForm(value);
  };

  const reset = () => {
    setForm(fields);
  };

  const isDefault = () => {
    return initForm === form;
  };

  return {
    form,
    handleInputChange,
    reset,
    isDefault,
    handleSetFormValueToEdit,
  };
};

export default useForm;
