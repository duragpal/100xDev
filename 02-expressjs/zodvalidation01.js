import express from "express";
import { z } from "zod";
const app = express();

const schema = z.array(z.number());
app.use(express.json());

/* email ==> string (email) 
password : atleast 8 digits
country: IN , US
*/

const userSchema = z.object({
  email : z.string(),
  password : z.string(),
  country : z.literal("IN").or(z.literal("US"))}
)

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.send({ response });

  //use if else to send different status.
});

app.listen(3000, () => {
  console.log("Express server initialized");
});
