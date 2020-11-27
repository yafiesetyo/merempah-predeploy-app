export const translate = (number) => {
  let formattedNumber = number
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return formattedNumber;
};

export const deTranslate = (strNumber) => {
  let number = parseInt(strNumber.replace(/[^0-9.-]+/g, ""));
  return number;
};
