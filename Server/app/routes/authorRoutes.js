const router = require('express').Router();
const {
    createAuthor,
    getAllAuthors,
    getAuthorByID,
    updateAuthor,
    deleteAuthor
} = require('../controller/authorController');


router.get("/", getAllAuthors);

router.get("/:id", getAuthorByID);

router.post("/", createAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
