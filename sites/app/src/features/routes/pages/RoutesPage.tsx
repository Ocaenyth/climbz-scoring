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
    data && (
      <div>
        <HomeButton />
        <CreateRouteSheet />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    )
  );
};
