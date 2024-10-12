const getByFields = async (model, queryParams, requestedFields) => {
  return (documents = await model.find(
    queryParams,
    requestedFields,
    populateOptions
  ));
};

module.exports = getByFields;
