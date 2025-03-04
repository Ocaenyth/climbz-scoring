import { DataTable } from "@/components/ui/data-table";
import { Gender } from "@/features/climber/dto/Gender";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { CategoryResult } from "../dto/CategoryResult";
import { ScratchCategory } from "../dto/ScratchCategory";
import { useScratchCategoryResults } from "../hooks/useScratchCategoryResults";

export interface ScratchCategoryResultsDataTableProps {
  scratchCategory: ScratchCategory;
  gender: Gender;
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
          {original.climber.firstName} {original.climber.lastName} (
          {original.climber.competitionCategory.name})
        </Link>
      );
    },
  },
  {
    header: "Score",
    accessorKey: "score",
  },
];

export const ScratchCategoryResultsDataTable = ({
  scratchCategory,
  gender,
}: ScratchCategoryResultsDataTableProps) => {
  const { data } = useScratchCategoryResults(scratchCategory, gender);
  return (
    data && (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  );
};
