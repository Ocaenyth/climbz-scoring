import { AdminHomeButton } from "@/components/AdminHomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateCompetitionCategorySheet } from "../components/CreateCompetitionCategorySheet";
import { DeleteCompetitionCategoryButton } from "../components/DeleteCompetitionCategoryButton";
import { UpdateCompetitionCategorySheet } from "../components/UpdateCompetitionCategorySheet";
import { CompetitionCategory } from "../dto/CompetitionCategory";
import { useCompetitionCategories } from "../hooks/useCompetitionCategories";

const columns: ColumnDef<CompetitionCategory>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Nom",
    accessorKey: "name",
  },
  {
    header: "Tranche d'âge",
    accessorFn: (competitionCategory: CompetitionCategory) => {
      return `${competitionCategory.minAge} - ${competitionCategory.maxAge}`;
    },
  },
  {
    header: "Genre",
    accessorKey: "gender",
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

export const CompetitionCategoriesAdminPage = () => {
  const { data } = useCompetitionCategories();
  return (
    <div>
      <AdminHomeButton />
      <CreateCompetitionCategorySheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
