import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // hasheada
  createdAt: string;
}

const DB_FILE = path.join(process.cwd(), "data", "users.json");

// Asegurar que exista el directorio
function ensureDbDir() {
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Leer usuarios del archivo
function readUsers(): User[] {
  ensureDbDir();
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading users:", error);
  }
  return [];
}

// Guardar usuarios al archivo
function writeUsers(users: User[]) {
  ensureDbDir();
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
}

// Buscar usuario por email
export function findUserByEmail(email: string): User | null {
  const users = readUsers();
  return (
    users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null
  );
}

// Crear nuevo usuario
export async function createUser(
  name: string,
  email: string,
  password: string,
): Promise<{ success: boolean; user?: User; error?: string }> {
  // Validar email
  if (!email.includes("@")) {
    return { success: false, error: "Email inválido" };
  }

  // Validar contraseña
  if (password.length < 6) {
    return {
      success: false,
      error: "Contraseña debe tener al menos 6 caracteres",
    };
  }

  // Verificar si el email ya existe
  if (findUserByEmail(email)) {
    return { success: false, error: "Este email ya está registrado" };
  }

  // Hashear contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear usuario
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  // Guardar
  const users = readUsers();
  users.push(newUser);
  writeUsers(users);

  return { success: true, user: { ...newUser, password: "***" } };
}

// Validar credenciales
export async function validateCredentials(
  email: string,
  password: string,
): Promise<{
  success: boolean;
  user?: Omit<User, "password">;
  error?: string;
}> {
  const user = findUserByEmail(email);

  if (!user) {
    return { success: false, error: "Email o contraseña incorrectos" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { success: false, error: "Email o contraseña incorrectos" };
  }

  // Retornar usuario sin contraseña
  const { password: _, ...userWithoutPassword } = user;
  return { success: true, user: userWithoutPassword };
}
