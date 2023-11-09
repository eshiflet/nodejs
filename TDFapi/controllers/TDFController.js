var mongoose = require("mongoose"),
  Entry = mongoose.model("Entry");

exports.read_entries = async (req, res) => {
  try {
    var ret = await Entry.find();

    if (req.query.sort === "ridernumber") {
      ret = ret.sort((a,b) => a.RIDERNUMBER - b.RIDERNUMBER);
    }
    else if (req.query.sort === "finishgc") {
      ret = ret.sort((a,b) => a.FINISH - b.FINISH); //need to fix DNF, doesn't sort with numbers
    }

    if (req.query.team) {
      ret = ret.filter(a => a.TEAM === req.query.team);
    }
    else if (req.query.ridername) {
      ret = ret.filter(a => a.RIDERNAME === req.query.ridername);
    }

    res.json(ret);
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
