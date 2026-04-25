import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Tipos
interface User {
  id: string;
  name: string;
  email: string;
  password: string; // hasheada
  createdAt: string;
}

type SafeUser = Omit<User, "password">;

// Almacenamiento temporal en memoria
let users: User[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword } = body;

    // 1. Validar campos obligatorios
    if (!name?.trim() || !email?.trim() || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 },
      );
    }

    // Validar formato básico de email
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Validar longitud de contraseña
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Contraseña debe tener al menos 6 caracteres" },
        { status: 400 },
      );
    }

    // 2. Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Las contraseñas no coinciden" },
        { status: 400 },
      );
    }

    // 3. Verificar que el usuario no exista
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
    );
    if (existingUser) {
      return NextResponse.json(
        { error: "Este email ya está registrado" },
        { status: 400 },
      );
    }

    // 4. Crear el nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    // 5. Guardar en memoria
    users.push(newUser);

    // Crear usuario seguro sin contraseña
    const safeUser: SafeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    // Retornar respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        user: safeUser,
        message: "Usuario creado exitosamente",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
