import express from "express";
const router = express.Router();
export default router;
import { createEmployee, getEmployees, getEmployee, updateEmployee,deleteEmployee } from "#db/queries/employees";
// TODO: this file!


router.get("/", async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
});
router.post("/", async (req,res) => {
    
    if (!req.body)
        return res.status(400).send("request must have a body");
      const { name, birthday, salary} = req.body;
    if (!name || !birthday || !salary)
        return res.status(400).send("missing required fields");
    const employee = await createEmployee({name, birthday, salary});
    res.status(201).send(employee);

    
})


router.param("id", async (req,res,next,id) =>{
//had to look up what this was after seeing it used as the solution in the guideprac feel free to dm about these hieroglypics
// regex to check if id is positive int //
  if (!/^\d+$/.test(id))
    return res.status(400).send("id must be a positive integer");
  const employee = await getEmployee(id);
  if (!employee)
    return res.status(404).send("employee not found");
  req.employee = employee;
  next();
});

router.get("/:id", async (req,res) => {
  res.send(req.employee);
});

router.put("/:id", async (req,res) =>{
if(!req.body) return res.status(400).send("Request must have a body.");
const {name, birthday, salary} = req.body;
if(!name|| !birthday|| !salary)
  return res.status(400).send("request body is missing required field")
const employee = await updateEmployee({name, birthday, salary});
res.status(200).send(employee);
});

router.delete("/:id", async(req,res) =>{
  await deleteEmployee(req.employee.id);
  res.sendStatus(204)
})
