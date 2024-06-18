import { z } from "zod";
/* 
object for user;;
email : string (email)
password: alteast 8 digits
country: IN , US
*/

function validateInput(obj) {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    // country: z.literal("IN").or(z.literal("US")),
  });
  const response = userSchema.safeParse(obj);
  console.log(response);
}
validateInput({ email: "abc@gmail.com", password: "123456900" }); //country:"IN"});
