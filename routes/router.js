const shoppingPortal = require('../controllers/shoppingController');
const router = require('express').Router()

router.route('/fetch-task').get(shoppingPortal.get_task).post(shoppingPortal.fetch_task);
router.route('/create-task').post(shoppingPortal.create_task);
router.route('/update-task').patch(shoppingPortal.update_task);
router.route('/delete-task').delete(shoppingPortal.delete_task)
module.exports  = router
