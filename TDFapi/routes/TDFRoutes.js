module.exports = app => {
  var TDF = require("../controllers/TDFController");

  app
    .route("/entries")
    .get(TDF.read_entries)
    .post(TDF.create_entry);

  app
    .route("/entries/:entryId")
    .get(TDF.read_entry)
    .put(TDF.update_entry)
    .delete(TDF.delete_entry);
};