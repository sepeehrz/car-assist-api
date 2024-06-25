import expres from "express";
import 'dotenv/config'
import handleRouters from "./app/routes/index.js";

const app = expres();
app.use(expres.json());
const port = 3000;

handleRouters(app);
app.set('etag', 'strong');  

app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
