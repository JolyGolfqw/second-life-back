const {Router} = require('express')

const router = Router()

router.use(require('./categories.route'))
router.use(require('./pets.route'))


module.exports = router