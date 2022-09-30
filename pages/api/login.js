import connect from "../../lib/mongodb";
import User from "../../model/schema";
connect();
export default async function handler(req, res) {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.redirect("/");
    if (!user) {
      return res.json({ "code": 'user not created' });
    }
  } catch (error) {
    res.status(400).json({ status: "Not created" });
  }

  console.log(req.body);
}
