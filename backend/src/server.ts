import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import app from "./app";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });
import { connectDB } from "./config/database";

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} as http://localhost:${PORT}`);
});
