import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Wall } from "../dto/Wall";
import { useUpdateWall } from "../hooks/useUpdateWall";
import { WallForm, WallFormValues } from "./WallForm";

export interface UpdateWallSheetProps {
  wall: Wall;
}

export const UpdateWallSheet = ({ wall }: UpdateWallSheetProps) => {
  const { mutateAsync } = useUpdateWall();
  const handleSubmit = async (values: WallFormValues) => {
    await toast
      .promise(
        mutateAsync(
          { ...values, id: wall.id },
          {
            onSuccess: () => {
              setOpen(false);
            },
          }
        ),
        {
          loading: "Modification en cours...",
          success: "Couloir bien modifié !",
          error: "Une erreur est survenue en modifiant un.e participant.e",
        }
      )
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button size="icon">
          <Pencil />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Modifier un couloir</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <WallForm onSubmit={handleSubmit} defaultValues={wall}></WallForm>
      </SheetContent>
    </Sheet>
  );
};
