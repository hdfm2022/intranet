import { app } from "./app"

const httpPort = process.env.PORT || 3000;
app.listen(httpPort, () => {
    console.clear()
    console.log("⚡️ Commbox Intranet Server is running")
    console.log("⚡️ HTTP Port "+httpPort+"")
});