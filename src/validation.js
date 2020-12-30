export const FormValidationOne = (values) => {
  let isValid = true;
  let errors = {};
  const { name, email, dob } = values;
  if (!name.trim()) {
    errors.name = "Username required !!";
    isValid = false;
  } else if (name.length > 15) {
    errors.name = "Username must be less than 15 chars !!";
    isValid = false;
  }
  if (!email.trim()) {
    errors.email = "Email required !!";
    isValid = false;
  }
  if (!dob) {
    errors.dob = "dob required !!";
    isValid = false;
  }
  return { isValid, errors };
};
