import { HomeButton } from "@/components/HomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateClimberSheet } from "../components/CreateClimberSheet";
import { DeleteClimberButton } from "../components/DeleteClimberButton";
import { UpdateClimberSheet } from "../components/UpdateClimberSheet";
import { Climber } from "../dto/Climber";
import { useClimbers } from "../hooks/useClimbers";

const columns: ColumnDef<Climber>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "createdAt",
    header: "Crée le",
  },
  {
    accessorKey: "updatedAt",
    header: "Modifié le",
  },
  {
    accessorKey: "firstName",
    header: "Prénom",
  },
  {
    accessorKey: "lastName",
    header: "Nom de famille",
  },
  {
    accessorKey: "age",
    header: "Âge",
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
          <UpdateClimberSheet climber={original}></UpdateClimberSheet>
          <DeleteClimberButton climber={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const ClimbersPage = () => {
  const { data } = useClimbers();
  return (
    <div>
      <HomeButton />
      <CreateClimberSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
