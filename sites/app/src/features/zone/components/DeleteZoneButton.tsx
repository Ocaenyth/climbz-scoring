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
import { Zone } from "../dto/Zone";
import { useDeleteZone } from "../hooks/useDeleteZone";

export interface DeleteZoneButtonProps {
  zone: Zone;
}

export const DeleteZoneButton = ({ zone }: DeleteZoneButtonProps) => {
  const { mutate } = useDeleteZone();
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
            Êtes-vous sûr.e de vouloir supprimer la zone {zone.number} ?
          </DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée, et la zone {zone.number}
            sera définitivement supprimé
          </DialogDescription>
          <Button variant="destructive" onClick={() => mutate(zone.id)}>
            Oui
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
