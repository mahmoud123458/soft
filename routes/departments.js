import { Router } from "express";
import department from "../models/department.js";
import { all, create, deleteOne, edit, show, store, update } from "../controllers/department.js";


const router = new Router();

router.get('/', all)

router.get('/create', create);

router.post('/', store)

router.get('/:_id/edit',edit)

router.put('/:_id',update)

router.get('/:_id',show)

router.delete('/:_id', deleteOne)



// router.get('/create_departments', async (req, res) => {
//     await department.create({
//         name: 'Computer Science',
//         code: 'CS',
//     });

//     res.send('Added');
// });

export default router;
