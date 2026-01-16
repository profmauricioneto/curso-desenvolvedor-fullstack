import * as authService from "./auth.service.js";

// POST /auth/login - Realiza login
export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 
                message: "Username e password são obrigatórios" 
            });
        }

        const user = await authService.authenticateUser(username, password);

        if (!user) {
            return res.status(401).json({ 
                message: "Credenciais inválidas" 
            });
        }

        const token = authService.generateToken(user);

        res.status(200).json({
            message: "Login realizado com sucesso",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Erro ao realizar login", 
            error: error.message 
        });
    }
};

// POST /auth/register - Registra novo usuário
export const registerController = async (req, res) => {
    try {
        const { username, password, email, role } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ 
                message: "Username, password e email são obrigatórios" 
            });
        }

        const newUser = await authService.registerUser({
            username,
            password,
            email,
            role
        });

        // Remove a senha do retorno
        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({
            message: "Usuário registrado com sucesso",
            user: userWithoutPassword
        });
    } catch (error) {
        if (error.message === "Usuário já existe") {
            return res.status(409).json({ 
                message: error.message 
            });
        }

        res.status(500).json({ 
            message: "Erro ao registrar usuário", 
            error: error.message 
        });
    }
};

// GET /auth/myprofile - Retorna dados do usuário autenticado
export const getMyProfileController = (req, res) => {
    try {
        const user = authService.findUserById(req.user.id);

        if (!user) {
            return res.status(404).json({ 
                message: "Usuário não encontrado" 
            });
        }

        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ 
            message: "Erro ao buscar dados do usuário", 
            error: error.message 
        });
    }
};
