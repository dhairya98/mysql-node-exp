import express from "express";
import {
	getNotes,
	getNote,
	createNote,
	updateNote,
	deleteNote,
} from "./database.js";

const app = express();
app.use(express.json());

app.get("/notes", async (req, res) => {
	try {
		const notes = await getNotes();
		res.json(notes);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.get("/notes/:id", async (req, res) => {
	try {
		const note = await getNote(req.params.id);
		if (!note) return res.status(404).json({ error: "Note not found" });
		res.json(note);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post("/notes", async (req, res) => {
	const { title, content } = req.body;
	if (!title) return res.status(400).json({ error: "Title is required" });

	try {
		const newNote = await createNote(title, content);
		res.status(201).json(newNote);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.put("/notes/:id", async (req, res) => {
	const { title, content } = req.body;
	if (!title) return res.status(400).json({ error: "Title is required" });

	try {
		const updated = await updateNote(req.params.id, title, content);
		res.json(updated);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.delete("/notes/:id", async (req, res) => {
	try {
		const deleted = await deleteNote(req.params.id);
		if (!deleted) return res.status(404).json({ error: "Note not found" });
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
