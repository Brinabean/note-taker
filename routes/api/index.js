const router = require("express").Router();
const noteRoutes = require("../api/notes");

router.use(noteRoutes);

module.exports = router;
