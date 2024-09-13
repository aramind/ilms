const update = async (model, id, data) => {
  return (updated = await model.findOneAndUpdate(
    { id },
    { $set: { ...data } },
    { new: true }
  ));
};

module.exports = update;
