import { DataTable } from "@/components/ui/data-table";
import { CompetitionCategory } from "@/features/competition-category/dto/CompetitionCategory";
import { useCompetitionCategoryResults } from "@/features/competition-category/hooks/useCompetitionCategoryResults";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { CategoryResult } from "../dto/CategoryResult";

export interface CategoryResultsDataTableProps {
  category: CompetitionCategory;
}

const columns: ColumnDef<CategoryResult>[] = [
  {
    header: "Rang",
    accessorKey: "rank",
  },
  {
    header: "Participant.e",
    cell: ({ row: { original } }) => {
      return (
        <Link
          to={`/climbers/${original.climber.id}`}
          target="_blank"
          className="underline flex justify-center"
        >
          {original.climber.firstName} {original.climber.lastName}
        </Link>
      );
    },
  },
  {
    header: "Score",
    accessorKey: "score",
  },
];

export const CategoryResultsDataTable = ({
  category,
}: CategoryResultsDataTableProps) => {
  const { data } = useCompetitionCategoryResults(category.id);
  return (
    data && (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  );
};
