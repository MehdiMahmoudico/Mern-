const AuthorController = require("../controllers/controller.author");


module.exports = (app) => {
    app.get("/api/authors",AuthorController.findALLAuthors);
    app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);
    app.post("/api/authors",AuthorController.createNewAuthor);
    app.patch("/api/authors/:id", AuthorController.updateExistingAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAnExistingAuthor);
}