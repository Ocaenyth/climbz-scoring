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
import { CompetitionCategory } from "../dto/CompetitionCategory";
import { useDeleteCompetitionCategory } from "../hooks/useDeleteCompetitionCategory";

export interface DeleteCompetitionCategoryButtonProps {
  competitionCategory: CompetitionCategory;
}

export const DeleteCompetitionCategoryButton = ({
  competitionCategory,
}: DeleteCompetitionCategoryButtonProps) => {
  const { mutate } = useDeleteCompetitionCategory();
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
            Êtes-vous sûr.e de vouloir supprimer la catégorie{" "}
            {competitionCategory.name} ({competitionCategory.gender} :{" "}
            {competitionCategory.minAge} - {competitionCategory.maxAge}) ?
          </DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée, et la catégorie{" "}
            {competitionCategory.name} ({competitionCategory.gender} :{" "}
            {competitionCategory.minAge} - {competitionCategory.maxAge}) sera
            définitivement supprimée
          </DialogDescription>
          <AcceptDeletionButton
            onClick={async () => mutate(competitionCategory.id)}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
