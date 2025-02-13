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
import { Wall } from "../dto/Wall";
import { useDeleteWall } from "../hooks/useDeleteWall";

export interface DeleteWallButtonProps {
  wall: Wall;
}

export const DeleteWallButton = ({ wall }: DeleteWallButtonProps) => {
  const { mutate } = useDeleteWall();
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
            Êtes-vous sûr.e de vouloir supprimer le couloir {wall.number} ?
          </DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée, et le couloir {wall.number}
            sera définitivement supprimé
          </DialogDescription>
          <Button variant="destructive" onClick={() => mutate(wall.id)}>
            Oui
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
