import users from "../../data/users.json" with { type: "json" };
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let usersData = [...users];

// Busca usuário por username
export const findUserByUsername = (username) => {
    return usersData.find((user) => user.username === username);
};

// Busca usuário por ID
export const findUserById = (id) => {
    return usersData.find((user) => user.id === parseInt(id));
};

// Autentica usuário
export const authenticateUser = async (username, password) => {
    const user = findUserByUsername(username);
    
    if (!user) {
        return null;
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
        return null;
    }
    return user;
};

// Gera token JWT
export const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    };

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "24h" }
    );

    return token;
};

// Verifica token JWT
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
};

// Registra novo usuário
export const registerUser = async (userData) => {
    const { username, password, email, role = "student" } = userData;

    // Verifica se usuário já existe
    const existingUser = findUserByUsername(username);
    if (existingUser) {
        throw new Error("Usuário já existe");
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria novo usuário
    const newUser = {
        id: usersData.length + 1,
        username,
        password: hashedPassword,
        email,
        role
    };

    usersData.push(newUser);
    return newUser;
};
