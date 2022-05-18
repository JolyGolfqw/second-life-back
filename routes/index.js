const {Router} = require('express')

const router = Router()

router.use(require('./categories.route'))
router.use(require('./pets.route'))
router.use(require('./shelters.route'))


module.exports = router