import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const hadleForm = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const hadleLogout = (event)=> {
    event.preventDefault()
    localStorage.removeItem('Username');
    localStorage.removeItem('Password');
  };

  const handleReset = () => {
    setValues(initialValue);
  };



  return [values, hadleForm ,hadleLogout, handleReset];
};

export default useForm;
