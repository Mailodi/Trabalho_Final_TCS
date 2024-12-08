// src/utils/errorHandler.ts
export const handleError = (res: any, error: any) => {
    res.status(500).json({ message: "Erro interno do servidor", error });
  };
  