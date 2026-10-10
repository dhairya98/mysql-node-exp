## API Documentation & Testing

You can test the CRUD endpoints using the following `curl` commands in your terminal.

### 1. Get All Notes
Retrieves a list of all notes in the database.
```bash
curl -X GET http://localhost:3000/notes
```

### 2. Get a Single Note
Retrieves a specific note by its ID (e.g., ID `1`).
```bash
curl -X GET http://localhost:3000/notes/1
```

### 3. Create a New Note
Creates a new note with a custom title and content payload.
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "content": "Milk, Eggs, Bread, and Coffee"}'
```

### 4. Update an Existing Note
Updates the title and content of a note by its ID (e.g., ID `1`).
```bash
curl -X PUT http://localhost:3000/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries (Updated)", "content": "Added organic spinach to the list"}'
```

### 5. Delete a Note
Removes a specific note from the database by its ID (e.g., ID `1`). Returns a `204 No Content` status on success.
```bash
curl -X DELETE http://localhost:3000/notes/1
```
