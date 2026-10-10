import mysql from "mysql2";

const pool = mysql
	.createPool({
		host: "127.0.0.1",
		user: "root",
		password: "1234",
		database: "notes_app",
	})
	.promise();

export async function getNotes() {
	const [rows] = await pool.query("SELECT * FROM notes");
	return rows;
}

export async function getNote(id) {
	const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
	return rows[0];
}

export async function createNote(title, contents) {
	const [result] = await pool.query(
		"INSERT INTO notes (title, contents) VALUES (?, ?)",
		[title, contents],
	);
	return { id: result.insertId, title, contents };
}

export async function updateNote(id, title, contents) {
	const [result] = await pool.query(
		"UPDATE notes SET title = ?, contents = ? WHERE id = ?",
		[title, contents, id],
	);
	return result.affectedRows > 0;
}

export async function deleteNote(id) {
	const [result] = await pool.query("DELETE FROM notes WHERE id = ?", [id]);
	return result.affectedRows > 0;
}

async function main() {
	try {
        console.log('hey hey')
		// const newNote = await createNote(
		// 	"JavaScript Insights",
		// 	"Always use await for promises!",
		// );
		// console.log("created Note", newNote);

		// const allNotes = await getNotes();
		// console.log("All Notes", allNotes);

		// const singleNote = await getNote(newNote.id);
		// console.log(`Fetched Note ${newNote.id}`, singleNote);

		// const updateSuccess = await updateNote(
		// 	newNote.id,
		// 	"JS Insights v2",
		// 	"Asynchronous calls rule.",
		// );
		// console.log("Update Status", updateSuccess);
		// const verifiedNote = await getNote(newNote.id);
		// console.log("Verified Updated Note", verifiedNote);

		// const deleteSuccess = await deleteNote(newNote.id);
		// console.log("Delete Status", deleteSuccess);
		// const finalCheck = await getNote(newNote.id);
		// console.log(
		// 	"check final check",
		// 	finalCheck === undefined,
		// );
	} catch (error) {
		console.error("Database CRUD Execution Error:", error);
	} finally {
		// await pool.end();
        console.log('Wow')
	}
}

main();
