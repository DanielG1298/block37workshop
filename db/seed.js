import db from "#db/client";
import { faker} from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++){
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate({mode: 'age', min: 18, max: 99 }),
      salary: faker.number.int({ min: 40000, max: 100000}),

    }; 
    await createEmployee(employee);
    console.log(`Created employee: ${employee.name}`);
  }
}
