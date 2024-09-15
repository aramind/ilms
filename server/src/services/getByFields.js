const getByFields = async (model, queryParams, requestedFields) => {
  return (documents = await model.find(queryParams, requestedFields));
};

module.exports = getByFields;
