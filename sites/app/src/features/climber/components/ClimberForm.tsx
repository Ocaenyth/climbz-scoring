import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CompetitionCategorySelect } from "@/features/competition-category/components/CompetitionCategorySelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createClimberSchema } from "../dto/Climber";
import { GenderSelect } from "./GenderSelect";

export const climberFormSchema = createClimberSchema;

export type ClimberFormValues = z.infer<typeof climberFormSchema>;

export interface ClimberFormProps {
  onSubmit: SubmitHandler<ClimberFormValues>;
  defaultValues?: DefaultValues<ClimberFormValues>;
}

const resolver = zodResolver(climberFormSchema);

export const ClimberForm = ({ onSubmit, defaultValues }: ClimberFormProps) => {
  const form = useForm<ClimberFormValues>({ defaultValues, resolver });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Prénom"
                  type="string"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de famille</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Nom de famille"
                  type="string"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Âge</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Âge"
                  type="string"
                  {...field}
                />
              </FormControl>
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
              <GenderSelect
                field={field}
                defaultValue={defaultValues?.gender}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="competitionCategoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catégorie</FormLabel>
              <CompetitionCategorySelect
                field={field}
                // TODO: This doesn't work please fix
                defaultValue={defaultValues?.competitionCategoryId}
              />
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
