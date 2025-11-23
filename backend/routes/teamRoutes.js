const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/teamController");

router.post("/", auth, c.create);
router.post("/assign", auth, c.assign);

module.exports = router;
