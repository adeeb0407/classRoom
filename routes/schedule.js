import express from "express";
import {
  getAllSchedule,
  scheduleDelete,
  schedulePost

  } from '../controller/schedule.js'

const router = express.Router();
router.get('/schedule', getAllSchedule);
router.post("/schedulePost", schedulePost);
router.post("/scheduleDelete", scheduleDelete);

export default router;