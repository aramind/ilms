const update = async (model, _id, data) => {
  return (updated = await model.findOneAndUpdate(
    { _id },
    { $set: { ...data } },
    { new: true }
  ));
};

module.exports = update;
