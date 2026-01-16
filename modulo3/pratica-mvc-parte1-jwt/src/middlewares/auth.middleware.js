import * as authService from "../modules/auth/auth.service.js";

// Middleware para autenticar token JWT
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ 
            message: "Token não fornecido" 
        });
    }

    const decoded = authService.verifyToken(token);

    if (!decoded) {
        return res.status(403).json({ 
            message: "Token inválido ou expirado" 
        });
    }

    req.user = decoded;
    next();
};

// Middleware para verificar papel do usuário (autorização)
export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ 
                message: "Usuário não autenticado" 
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: "Você não tem permissão para acessar este recurso" 
            });
        }

        next();
    };
};
