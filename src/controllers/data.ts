/// <reference path="../../typings/tsd.d.ts" />

import { Request, Response } from 'express';


module Data {

  'use strict';

export function hook(req: Request, res: Response) {
    res.send(200);
  }

}

export = Data;
