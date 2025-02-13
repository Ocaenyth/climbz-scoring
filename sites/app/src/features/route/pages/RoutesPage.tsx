import { HomeButton } from "@/components/HomeButton";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { CreateRouteSheet } from "../components/CreateRouteSheet";
import { DeleteRouteButton } from "../components/DeleteRouteButton";
import { UpdateRouteSheet } from "../components/UpdateRouteSheet";
import { Route } from "../dto/Route";
import { useRoutes } from "../hooks/useRoutes";

const columns: ColumnDef<Route>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorFn: (route) => {
      return route.wall.number;
    },
    header: "Couloir",
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

export const RoutesPage = () => {
  const { data } = useRoutes();
  return (
    <div>
      <HomeButton />
      <CreateRouteSheet />
      {data && (
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
};
