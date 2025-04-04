import { AdminHomeButton } from "@/components/AdminHomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { ClimberCompetitionCategoryCell } from "../components/ClimberCompetitionCategoryCell";
import { ClimberQrCodeDialog } from "../components/ClimberQrCodeDialog";
import { CreateClimberSheet } from "../components/CreateClimberSheet";
import { DeleteClimberButton } from "../components/DeleteClimberButton";
import { UpdateClimberSheet } from "../components/UpdateClimberSheet";
import { Climber } from "../dto/Climber";
import { useClimbers } from "../hooks/useClimbers";

const columns: ColumnDef<Climber>[] = [
  {
    header: "ID",
    cell: ({ row: { original } }) => {
      return (
        <div>
          <Link
            to={`/climbers/${original.id}`}
            target="_blank"
            className="underline flex justify-center"
          >
            {original.id}
          </Link>
          <ClimberQrCodeDialog climber={original} />
        </div>
      );
    },
  },
  {
    header: "Catégorie",
    cell: ({ row: { original } }) => {
      return <ClimberCompetitionCategoryCell climber={original} />;
    },
  },
  {
    header: "Prénom",
    accessorKey: "firstName",
  },
  {
    header: "Nom de famille",
    accessorKey: "lastName",
  },
  {
    header: "Âge",
    accessorKey: "age",
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
          <UpdateClimberSheet climber={original}></UpdateClimberSheet>
          <DeleteClimberButton climber={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const ClimbersAdminPage = () => {
  const { data } = useClimbers();
  return (
    <div>
      <AdminHomeButton />
      <CreateClimberSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
