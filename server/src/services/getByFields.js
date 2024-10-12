const getByFields = async (
  model,
  queryParams,
  requestedFields,
  populateOptions
) => {
  return (documents = await model.find(
    queryParams,
    requestedFields,
    populateOptions
  ));
};

module.exports = getByFields;
