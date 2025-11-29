import "reflect-metadata";

import { PORT } from "./config/envs";
import server from "./server";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(() => {    
    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
})
.catch((error) => console.log(error))
    