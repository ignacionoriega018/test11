import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Database } from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = new Database('store.db');

// ... (código existente)

// Crear usuarios de prueba
app.post('/api/create-test-users', async (req, res) => {
  const users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user1@example.com', password: 'user123', role: 'customer' },
    { email: 'user2@example.com', password: 'user123', role: 'customer' }
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    db.run('INSERT OR REPLACE INTO users (email, password, role) VALUES (?, ?, ?)',
      [user.email, hashedPassword, user.role],
      (err) => {
        if (err) {
          console.error('Error creating test user:', err);
        }
      }
    );
  }

  res.status(201).json({ message: 'Test users created successfully' });
});

// ... (resto del código existente)

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});