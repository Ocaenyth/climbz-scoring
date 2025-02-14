import { AcceptDeletionButton } from "@/components/AcceptDeletionButton";
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
import { Climber } from "../dto/Climber";
import { useDeleteClimber } from "../hooks/useDeleteClimber";

export interface DeleteClimberButtonProps {
  climber: Climber;
}

export const DeleteClimberButton = ({ climber }: DeleteClimberButtonProps) => {
  const { mutate } = useDeleteClimber();
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
            Êtes-vous sûr.e de vouloir supprimer le/la participant.e
            {climber.firstName} {climber.lastName} ?
          </DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée, et le/la participant.e
            {climber.firstName} {climber.lastName} sera définitivement
            supprimé.e
          </DialogDescription>
          <AcceptDeletionButton onClick={async () => mutate(climber.id)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
