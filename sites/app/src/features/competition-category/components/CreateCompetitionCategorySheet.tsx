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
import { useCreateCompetitionCategory } from "../hooks/useCreateCompetitionCategory";
import {
  CompetitionCategoryForm,
  CompetitionCategoryFormValues,
} from "./CompetitionCategoryForm";

export const CreateCompetitionCategorySheet = () => {
  const { mutateAsync } = useCreateCompetitionCategory();
  const handleSubmit = async (values: CompetitionCategoryFormValues) => {
    await toast
      .promise(
        mutateAsync(values, {
          onSuccess: () => {
            setOpen(false);
          },
        }),
        {
          loading: "Ajout en cours...",
          success: "Catégorie ajoutée !",
          error: "Erreur lors de la création de la catégorie",
        }
      )
      .unwrap();
  };
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Ajouter une catégorie</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Créer une catégorie</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <CompetitionCategoryForm
          onSubmit={handleSubmit}
        ></CompetitionCategoryForm>
      </SheetContent>
    </Sheet>
  );
};
