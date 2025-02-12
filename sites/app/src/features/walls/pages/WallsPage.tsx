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
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "number",
    header: "Numéro",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-row gap-1.5">
          <UpdateWallSheet wall={original}></UpdateWallSheet>
          <DeleteWallButton id={original.id} />
        </div>
      );
    },
    size: 0,
  },
];

export const WallsPage = () => {
  const { data } = useWalls();
  return (
    data && (
      <div>
        <HomeButton />
        <CreateWallSheet />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    )
  );
};
