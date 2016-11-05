'use strict';

import { Router } from 'express';
import { hook } from '../controllers/data';

let router = Router();

router.post('/hook', hook);

export = router;
