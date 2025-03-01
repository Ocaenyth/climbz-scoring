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
import { useCreateRoute } from "../hooks/useCreateRoute";
import { RouteForm, RouteFormValues } from "./RouteForm";

export const CreateRouteSheet = () => {
  const { mutateAsync } = useCreateRoute();
  const handleSubmit = async (values: RouteFormValues) => {
    await toast
      .promise(mutateAsync(values), {
        loading: "Ajout en cours...",
        success: "Voie ajoutée !",
        error: "Erreur lors de la création de la voie",
      })
      .unwrap();
  };
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Ajouter une voie</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer une voie</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <RouteForm onSubmit={handleSubmit}></RouteForm>
      </SheetContent>
    </Sheet>
  );
};
