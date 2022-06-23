# Día 3
## Creando una API con express


- `index.js`
```JavaScript
import Server from "./Server.js";

function main() {
  const server = new Server();
  server.start();
}

main();

```

- `Server.js`
```JavaScript
import express from "express";
import UserRoutes from "./Routes.js";

const userRoutes = new UserRoutes();

class Server {
  constructor() {
    this._app = express();
    this._port = 5000;
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares() {
    this._app.use(express.json());
  }

  initRoutes() {
    this._app.use("/api/v2", userRoutes._route);
  }

  start() {
    this._app.listen(this._port, () => {
      console.log("El servidor ha iniciado");
    });
  }
}

export default Server;


```

- `Routes.js`
```JavaScript
import express from "express";

class UserRoutes {
  constructor() {
    this._route = express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    this._route.post("/user", (req, res) => {
      console.log(req.method);
      res.json({ message: "Soy la ruta post" });
    });

    this._route.get("/user", (req, res) => {
      console.log(req.method);
      res.json({ message: "Soy la ruta GET" });
    });

    this._route.put("/user/:id", (req, res) => {
      console.log(req.method);
      console.log(req.params.id);
      res.json({ message: "Soy la ruta PUT", parametro: req.params.id });
    });

    this._route.delete("/user/:id", (req, res) => {
      console.log(req.method);
      console.log(req.params.id);
      res.json({ message: "Soy la ruta DELETE", parametro: req.params.id });
    });
  }
}

export default UserRoutes;

```