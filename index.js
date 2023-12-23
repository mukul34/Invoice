import app from "./app.js";
import { PORT } from "./config/index.js";
import { makeDBConnection } from "./core/mongoose.js";

app.listen(PORT, async () => {
    console.log(`Server working on PORT ${PORT}`);
    await makeDBConnection();
});