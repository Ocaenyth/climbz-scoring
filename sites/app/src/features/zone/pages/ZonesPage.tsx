import { HomeButton } from "@/components/HomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateZoneSheet } from "../components/CreateZoneSheet";
import { DeleteZoneButton } from "../components/DeleteZoneButton";
import { UpdateZoneSheet } from "../components/UpdateZoneSheet";
import { Zone } from "../dto/Zone";
import { useZones } from "../hooks/useZones";

const columns: ColumnDef<Zone>[] = [
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
          <UpdateZoneSheet zone={original}></UpdateZoneSheet>
          <DeleteZoneButton zone={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const ZonesPage = () => {
  const { data } = useZones();
  return (
    <div>
      <HomeButton />
      <CreateZoneSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
