import { HomeButton } from "@/components/HomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateCompetitionCategorySheet } from "../components/CreateCompetitionCategorySheet";
import { DeleteCompetitionCategoryButton } from "../components/DeleteCompetitionCategoryButton";
import { UpdateCompetitionCategorySheet } from "../components/UpdateCompetitionCategorySheet";
import { CompetitionCategory } from "../dto/CompetitionCategory";
import { useCompetitionCategories } from "../hooks/useCompetitionCategories";

const columns: ColumnDef<CompetitionCategory>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorFn: (competitionCategory: CompetitionCategory) => {
      return `${competitionCategory.minAge} - ${competitionCategory.maxAge}`;
    },
    header: "Tranche d'âge",
  },
  {
    accessorKey: "gender",
    header: "Genre",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-row gap-1.5">
          <UpdateCompetitionCategorySheet
            competitionCategory={original}
          ></UpdateCompetitionCategorySheet>
          <DeleteCompetitionCategoryButton competitionCategory={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const CompetitionCategoriesPage = () => {
  const { data } = useCompetitionCategories();
  return (
    <div>
      <HomeButton />
      <CreateCompetitionCategorySheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
