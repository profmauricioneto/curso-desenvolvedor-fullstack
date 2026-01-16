import bcrypt from "bcryptjs";

// Script para gerar hash de senhas
const generatePasswordHash = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

// Gera hashes para as senhas padrão
const passwords = ["admin123", "admin123", "admin123"];

console.log("Gerando hashes de senhas...\n");

for (let i = 0; i < passwords.length; i++) {
    const hash = await generatePasswordHash(passwords[i]);
    console.log(`Senha: ${passwords[i]}`);
    console.log(`Hash: ${hash}\n`);
}
