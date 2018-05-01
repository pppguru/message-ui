const isEmpty = (value) => value === undefined || value === null || value === '' || value === false;
const join = (rules) => (value) => rules.map((rule) => rule(value)).filter((error) => !!error)[0 /* first error */];

export function email(value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function required(value) {
  if (isEmpty(value)) {
    return 'This field is required';
  }
}

export function radio(value) {
  if (isEmpty(value)) {
    return 'Please make a choice from the list';
  }
}

export function date(value = '') {
  let isValid = moment.utc(value, 'MM-DD-YYYY').isValid();

  if (!isValid) {
    return "Date format is invalid";
  }
}

export function minLength(min) {
  return (value) => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function maxLength(max) {
  return (value) => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}

export function oneOf(enumeration) {
  return (value) => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key]);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}