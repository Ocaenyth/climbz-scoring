import { HomeButton } from "@/components/HomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateWallSheet } from "../components/CreateWallSheet";
import { DeleteWallButton } from "../components/DeleteWallButton";
import { UpdateWallSheet } from "../components/UpdateWallSheet";
import { Wall } from "../dto/Wall";
import { useWalls } from "../hooks/useWalls";

const columns: ColumnDef<Wall>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Numéro",
    accessorKey: "number",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-row gap-1.5">
          <UpdateWallSheet wall={original}></UpdateWallSheet>
          <DeleteWallButton wall={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const WallsPage = () => {
  const { data } = useWalls();
  return (
    <div>
      <HomeButton />
      <CreateWallSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
