import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Route } from "../dto/Route";
import { useDeleteRoute } from "../hooks/useDeleteRoute";

export interface DeleteRouteButtonProps {
  route: Route;
}

export const DeleteRouteButton = ({ route }: DeleteRouteButtonProps) => {
  const { mutate } = useDeleteRoute();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Êtes-vous sûr.e de vouloir supprimer la voie {route.name} ?
          </DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée, et la voie {route.name}
            sera définitivement supprimée
          </DialogDescription>
          <Button variant="destructive" onClick={() => mutate(route.id)}>
            Oui
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
