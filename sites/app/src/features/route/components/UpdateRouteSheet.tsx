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
import { Route } from "../dto/Route";
import { useUpdateRoute } from "../hooks/useUpdateRoute";
import { RouteForm, RouteFormValues } from "./RouteForm";

export interface UpdateRouteSheetProps {
  route: Route;
}

export const UpdateRouteSheet = ({ route }: UpdateRouteSheetProps) => {
  const { mutateAsync } = useUpdateRoute();
  const handleSubmit = async (values: RouteFormValues) => {
    await toast
      .promise(
        mutateAsync(
          { ...values, id: route.id },
          {
            onSuccess: () => {
              setOpen(false);
            },
          }
        ),
        {
          loading: "Modification en cours...",
          success: "Voie bien modifiée !",
          error: "Une erreur est survenue en modifiant une voie",
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
          <SheetTitle>Modifier une voie</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <RouteForm onSubmit={handleSubmit} defaultValues={route}></RouteForm>
      </SheetContent>
    </Sheet>
  );
};
