import express from "express";
const profileRouter = express.Router()

import {profileGet, profilePost, profileUpdate, profileDelete} from "../controllers/profiles.controller.js"

profileRouter.get('/', profileGet)

profileRouter.post('/', profilePost)

profileRouter.put('/:id', profileUpdate)

profileRouter.delete('/:id', profileDelete)

export default profileRouter