import { Router } from 'express';
import * as localController from '../controllers/localController.js';

const router = Router();

router.post('/', localController.criar);
router.get('/', localController.listar);
router.get('/:id', localController.buscar);
router.put('/:id', localController.atualizar);
router.delete('/:id', localController.remover);

export default router;