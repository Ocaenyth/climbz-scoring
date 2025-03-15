import { AdminHomeButton } from "@/components/AdminHomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateRouteSheet } from "../components/CreateRouteSheet";
import { DeleteRouteButton } from "../components/DeleteRouteButton";
import { UpdateRouteSheet } from "../components/UpdateRouteSheet";
import { Route } from "../dto/Route";
import { useRoutes } from "../hooks/useRoutes";

const columns: ColumnDef<Route>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Ordre d'affichage",
    accessorKey: "displayOrder",
  },
  {
    header: "Nom",
    accessorKey: "name",
  },
  {
    header: "Couloir",
    accessorFn: (route) => {
      return route.wall.number;
    },
  },
  {
    header: "Nombre de zones",
    accessorFn: (route) => {
      return route.zoneCount;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-row gap-1.5">
          <UpdateRouteSheet route={original}></UpdateRouteSheet>
          <DeleteRouteButton route={original} />
        </div>
      );
    },
    size: 0,
  },
];

export const RoutesAdminPage = () => {
  const { data } = useRoutes();
  return (
    <div>
      <AdminHomeButton />
      <CreateRouteSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
