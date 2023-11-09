var mongoose = require("mongoose"),
  Entry = mongoose.model("Entry");

exports.read_entries = async (req, res) => {
  try {
    const ret = await Entry.find();
    if (req.query.sort === "ridernumber")
      res.json(ret.sort((a,b) => b.RIDERNUMBER - a.RIDERNUMBER));
    else res.json(ret);
  } catch (error) {
    res.send({ message: "Bad request: " + error });
  }
};

exports.create_entry = async (req, res) => {
  try {
    const new_entry = new Entry(req.body);
    ret = await new_entry.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: "Bad request: " + error });
  }
};

exports.read_entry = async (req, res) => {
  try {
    const ret = await Entry.findById(req.params.entryId);
    res.send(ret);
  } catch (error) {
    res.send({ message: "Bad request: " + error });
  }
};

exports.update_entry = async (req, res) => {
  try {
    const ret = await Entry.findByIdAndUpdate(
      { _id: req.params.entryId },
      req.body,
      { new: true }
    );
    res.json(ret);
  } catch (error) {
    res.send({ message: "Bad request: " + error });
  }
};

exports.delete_entry = async (req, res) => {
  try {
    const ret = await Entry.deleteOne({ _id: req.params.entryId });
    res.json({ message: "Deleted entry" });
  } catch (error) {
    res.send({ message: "Bad Request: " + error });
  }
};
