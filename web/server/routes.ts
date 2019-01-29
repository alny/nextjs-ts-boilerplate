const Router = require("nextjs-dynamic-routes");

const router = new Router();

router.add({ name: "user", pattern: "/user/:id" });

module.exports = router;
