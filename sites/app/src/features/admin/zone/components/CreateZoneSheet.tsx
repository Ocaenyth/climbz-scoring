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
import { useCreateZone } from "../hooks/useCreateZone";
import { ZoneForm, ZoneFormValues } from "./ZoneForm";

export const CreateZoneSheet = () => {
  const { mutateAsync } = useCreateZone();
  const handleSubmit = async (values: ZoneFormValues) => {
    await toast
      .promise(
        mutateAsync(values, {
          onSuccess: () => {
            setOpen(false);
          },
        }),
        {
          loading: "Ajout en cours...",
          success: "Zone ajoutée !",
          error: "Erreur lors de la création de la zone",
        }
      )
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Ajouter une zone</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer une zone</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ZoneForm onSubmit={handleSubmit}></ZoneForm>
      </SheetContent>
    </Sheet>
  );
};
