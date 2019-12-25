// ==========  server.js ==============
// Requirements
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");

// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require("admin-bro-mongoose"));

// express server definition
const app = express();
app.use(bodyParser.json());

// Resources definitions
const User = mongoose.model("User", {
  name: String,
  email: String,
  surname: String
});

var artcileSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  created_at: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", artcileSchema);

// Routes definitions
app.get("/", (req, res) => res.send("AdminBro App Test!"));

// Route which returns last 100 users from the database
app.get("/users", async (req, res) => {
  const users = await User.find({}).limit(10);
  res.send(users);
});

// Route which creates new user
app.post("/users", async (req, res) => {
  const user = await new User(req.body.user).save();
  res.send(user);
});

// Route whick retuns articles
app.get("/articles", async (req, res) => {
  const articles = await Article.find({}).limit(10);
  res.send(articles);
});

const createParent = {
  name: "Create",
  icon: "fa fa-coffee"
};

const managerParent = {
  name: "Manage",
  icon: "fa fa-cog"
};

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [
    {
      resource: User,
      options: { parent: managerParent }
    },
    {
      resource: Article,
      options: {
        properties: {
          body: { type: "richtext" },
          created_at: {
            isVisible: { list: false, filter: false, show: true, edit: false }
          }
        },
        parent: createParent
      }
    }
  ],
  rootPath: "/admin",
  branding: {
    companyName: "AdminBro"
  },
  dashboard: {
    component: AdminBro.require("./dashboard")
  }
});

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// Running the server
const run = async () => {
  await mongoose.connect("mongodb://localhost/admin", {
    useNewUrlParser: true
  });
  await app.listen(8080, () => console.log(`Listening on port 8080!`));
};

run();
