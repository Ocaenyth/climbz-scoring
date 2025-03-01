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
import { GenderSelect } from "@/features/climber/components/GenderSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createCompetitionCategorySchema } from "../dto/CompetitionCategory";

export const competitionCategoryFormSchema = createCompetitionCategorySchema;

export type CompetitionCategoryFormValues = z.infer<
  typeof competitionCategoryFormSchema
>;

export interface CompetitionCategoryFormProps {
  onSubmit: SubmitHandler<CompetitionCategoryFormValues>;
  defaultValues?: DefaultValues<CompetitionCategoryFormValues>;
}

const resolver = zodResolver(competitionCategoryFormSchema);

export const CompetitionCategoryForm = ({
  onSubmit,
  defaultValues,
}: CompetitionCategoryFormProps) => {
  const form = useForm<CompetitionCategoryFormValues>({
    defaultValues,
    resolver,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catégorie</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Catégorie"
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
          name="minAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Âge minimum (inclus)</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Âge minimum (inclus)"
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
          name="maxAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Âge maximum (inclus)</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Âge maximum (inclus)"
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <GenderSelect field={field}></GenderSelect>
              <FormDescription />
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
