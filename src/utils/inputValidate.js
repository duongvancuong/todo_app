export const pwdValidateInput = (checkingText) => {
  const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const checkingResult = regexp.exec(checkingText);
  if (checkingResult !== null) {
    return {
      isInputValid : true,
    };
  } else {
    return {
      isInputValid : false,
    }
  }
}

export const emailValidateInput = (checkingText) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const checkingResult = emailRegex.exec(checkingText);
  if (checkingResult !== null) {
    return {
      isInputValid : true,
    };
  } else {
    return {
      isInputValid : false,
    }
  }
}
