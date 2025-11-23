const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/employeeController");

router.post("/", auth, c.create);
router.get("/", auth, c.all);

module.exports = router;
