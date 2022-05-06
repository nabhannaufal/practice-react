const convertArray = (dataArray) => {
  const data = dataArray.toString().replaceAll("[", "").replaceAll("]", "");
  return data.split(",");
};

export default convertArray;
