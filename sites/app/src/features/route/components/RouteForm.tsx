import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { WallSelect } from "@/features/wall/components/WallSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createRouteSchema } from "../dto/Route";

export const routeFormSchema = createRouteSchema;

export type RouteFormValues = z.infer<typeof routeFormSchema>;

export interface RouteFormProps {
  onSubmit: SubmitHandler<RouteFormValues>;
  defaultValues?: DefaultValues<RouteFormValues>;
}

const resolver = zodResolver(routeFormSchema);

export const RouteForm = ({ onSubmit, defaultValues }: RouteFormProps) => {
  const form = useForm<RouteFormValues>({ defaultValues, resolver });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la voie</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Nom de la voie"
                  type="string"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zoneCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de zones (incluant TOP)</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Nombre de zones"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wallId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Couloir</FormLabel>
              <WallSelect field={field}></WallSelect>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Enregistrer
        </Button>
      </form>
    </Form>
  );
};
