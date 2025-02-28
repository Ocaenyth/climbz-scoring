import { AdminHomeButton } from "@/components/AdminHomeButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCompetitionCategories } from "@/features/competition-category/hooks/useCompetitionCategories";
import { CategoryResultsDataTable } from "../components/CategoryResultsDataTable";

export const LeaderboardPage = () => {
  const { data: categoriesData } = useCompetitionCategories();
  return (
    <div>
      <AdminHomeButton />
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          {categoriesData &&
            categoriesData.map((category) => {
              return (
                <TabsTrigger value={category.name}>{category.name}</TabsTrigger>
              );
            })}
        </TabsList>
        {categoriesData &&
          categoriesData.map((category) => {
            return (
              <TabsContent value={category.name}>
                <CategoryResultsDataTable category={category} />
              </TabsContent>
            );
          })}
      </Tabs>
    </div>
  );
};
