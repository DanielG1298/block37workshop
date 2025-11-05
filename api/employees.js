import express from "express";
const router = express.Router();
export default router;
import { getEmployees, getEmployee, updateEmployee,deleteEmployee } from "#db/queries/employees";
// TODO: this file!
router.get("/", async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
});
