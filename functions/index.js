import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhoto, addLike } from "./src/photos.js";
import { userLogin, addNewUser, updateUser } from "./src/users.js";


const app = express();
app.use(cors());
app.use(express.json());


app.post("/login", userLogin)
app.get("/photos", getAllPhotos);
app.post("/photos", addNewPhoto);
app.patch("/photos/:photoId", addLike)
app.post("/users", addNewUser)
app.patch("/users/:userId", updateUser)

export const api = functions.https.onRequest(app)

// const PORT = 3031

// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))
