import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./Category-item";

const Categories = async () => {
  // Retornar todas as categorias do banco de dados
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
