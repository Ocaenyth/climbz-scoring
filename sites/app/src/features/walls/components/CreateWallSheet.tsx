import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateWall } from "../hooks/useCreateWall";
import { WallForm, WallFormValues } from "./WallForm";

export const CreateWallSheet = () => {
  const { mutateAsync } = useCreateWall();
  const handleSubmit = async (values: WallFormValues) => {
    await toast
      .promise(
        mutateAsync(values, {
          onSuccess: () => {
            setOpen(false);
          },
        }),
        {
          loading: "Saving in progress",
          success: "Wall successfully created",
          error: "Error while creating wall",
        }
      )
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Ajouter un couloir</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer un couloir</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <WallForm onSubmit={handleSubmit}></WallForm>
      </SheetContent>
    </Sheet>
  );
};
