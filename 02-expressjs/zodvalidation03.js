import { z } from "zod";
function validateInput(obj) {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    // country: z.literal("IN").or(z.literal("US")),
  });
  const response = userSchema.safeParse(obj);
  return response;
}

app.post("/login", (req, res) => {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "Inputs are invalid",
    });
    return;
  }
});
