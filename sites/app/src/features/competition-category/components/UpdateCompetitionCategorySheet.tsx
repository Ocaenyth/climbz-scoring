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
import { CompetitionCategory } from "../dto/CompetitionCategory";
import { useUpdateCompetitionCategory } from "../hooks/useUpdateCompetitionCategory";
import {
  CompetitionCategoryForm,
  CompetitionCategoryFormValues,
} from "./CompetitionCategoryForm";

export interface UpdateCompetitionCategorySheetProps {
  competitionCategory: CompetitionCategory;
}

export const UpdateCompetitionCategorySheet = ({
  competitionCategory,
}: UpdateCompetitionCategorySheetProps) => {
  const { mutateAsync } = useUpdateCompetitionCategory();
  const handleSubmit = async (values: CompetitionCategoryFormValues) => {
    await toast
      .promise(
        mutateAsync(
          { ...values, id: competitionCategory.id },
          {
            onSuccess: () => {
              setOpen(false);
            },
          }
        ),
        {
          loading: "Modification en cours...",
          success: "Catégorie bien modifiée !",
          error: "Une erreur est survenue en modifiant une catégorie",
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
          <SheetTitle>Modifier une catégorie</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <CompetitionCategoryForm
          onSubmit={handleSubmit}
          defaultValues={competitionCategory}
        ></CompetitionCategoryForm>
      </SheetContent>
    </Sheet>
  );
};
