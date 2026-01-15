import subjects from "../data/subjects.json" with { type: "json" };

let subjectsData = [...subjects];

// Retorna todas as disciplinas
export const getAllSubjects = () => {
    return subjectsData;
};

// Retorna uma disciplina por ID
export const getSubjectById = (id) => {
    return subjectsData.find((subject) => subject.id === parseInt(id));
};

// Cria uma nova disciplina
export const createSubject = (subjectData) => {
    const newId = subjectsData.length + 1;
    const newSubject = {
        id: newId,
        ...subjectData,
    };
    subjectsData.push(newSubject);
    return newSubject;
};

// Atualiza uma disciplina existente
export const updateSubject = (id, subjectData) => {
    const index = subjectsData.findIndex((subject) => subject.id === parseInt(id));
    if (index === -1) return null;

    subjectsData[index] = {
        ...subjectsData[index],
        ...subjectData,
        id: parseInt(id),
    };
    return subjectsData[index];
};

// Remove uma disciplina
export const deleteSubject = (id) => {
    const index = subjectsData.findIndex((subject) => subject.id === parseInt(id));
    if (index === -1) return null;

    const deletedSubject = subjectsData[index];
    subjectsData.splice(index, 1);
    return deletedSubject;
};
