import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const userData = [
    {
        id: 101,
        name: "Abc",
        email: "cm@abes.call.in"
    }
];

// GET all users
app.get("/users", (req, res) => {
    res.status(200).json({
        message: "Welcome user, the FSD class has started now",
        userData
    });
});

// GET message
app.get("/msg", (req, res) => {
    res.status(200).json({
        message: "This is our last class before lunch",
        userData
    });
});

// POST create user
app.post("/create", (req, res) => {
    const { id, name, email } = req.body;

    const newUser = {
        id,
        name,
        email
    };

    userData.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        newUser
    });
});

// PUT edit user
app.put("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = userData.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, email } = req.body;

    userData[index].name = name;
    userData[index].email = email;

    res.status(200).json({
        message: "User updated successfully",
        updatedUser: userData[index]
    });
});

// DELETE user
app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = userData.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = userData.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully",
        deletedUser: deletedUser[0]
    });
});

// Start server
app.listen(4000, () => {
    console.log("Server is running on port number 4000");
});