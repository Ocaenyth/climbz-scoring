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
import { useCreateClimber } from "../hooks/useCreateClimber";
import { ClimberForm, ClimberFormValues } from "./ClimberForm";

export const CreateClimberSheet = () => {
  const { mutateAsync } = useCreateClimber();
  const handleSubmit = async (values: ClimberFormValues) => {
    await toast
      .promise(mutateAsync(values), {
        loading: "Ajout en cours...",
        success: "Participant.e ajouté.e !",
        error: "Erreur lors de la création du/de la participant.e",
      })
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Ajouter un.e participant.e</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer un.e participant.e</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <ClimberForm onSubmit={handleSubmit}></ClimberForm>
      </SheetContent>
    </Sheet>
  );
};
