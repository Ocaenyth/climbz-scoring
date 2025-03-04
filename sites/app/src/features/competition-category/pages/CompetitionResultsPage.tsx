import { AdminHomeButton } from "@/components/AdminHomeButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCompetitionCategories } from "@/features/competition-category/hooks/useCompetitionCategories";
import { CompetitionCategoryResultsDataTable } from "../components/CategoryResultsDataTable";
import { ScratchCategoryResultsDataTable } from "../components/ScratchCategoryResultsDataTable";

export const LeaderboardPage = () => {
  const { data: categoriesData } = useCompetitionCategories();
  return (
    <div>
      <AdminHomeButton />
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value={"Scratch (Jeunes F)"}>
            Scratch (Jeunes F)
          </TabsTrigger>
          <TabsTrigger value={"Scratch (Jeunes H)"}>
            Scratch (Jeunes H)
          </TabsTrigger>

          <TabsTrigger value={"Scratch (Adultes F)"}>
            Scratch (Adultes F)
          </TabsTrigger>
          <TabsTrigger value={"Scratch (Adultes H)"}>
            Scratch (Adultes H)
          </TabsTrigger>

          {categoriesData &&
            categoriesData.map((category) => {
              return (
                <TabsTrigger value={category.name}>{category.name}</TabsTrigger>
              );
            })}

          <TabsTrigger value={"Scratch (Global F)"}>
            Scratch (Global F)
          </TabsTrigger>
          <TabsTrigger value={"Scratch (Global H)"}>
            Scratch (Global H)
          </TabsTrigger>
        </TabsList>

        <TabsContent value={"Scratch (Jeunes F)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="YOUNG"
            gender="WOMAN"
          />
        </TabsContent>
        <TabsContent value={"Scratch (Jeunes H)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="YOUNG"
            gender="MAN"
          />
        </TabsContent>

        <TabsContent value={"Scratch (Adultes F)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="ADULT"
            gender="WOMAN"
          />
        </TabsContent>
        <TabsContent value={"Scratch (Adultes H)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="ADULT"
            gender="MAN"
          />
        </TabsContent>

        {categoriesData &&
          categoriesData.map((category) => {
            return (
              <TabsContent value={category.name}>
                <CompetitionCategoryResultsDataTable category={category} />
              </TabsContent>
            );
          })}

        <TabsContent value={"Scratch (Global F)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="GLOBAL"
            gender="WOMAN"
          />
        </TabsContent>
        <TabsContent value={"Scratch (Global H)"}>
          <ScratchCategoryResultsDataTable
            scratchCategory="GLOBAL"
            gender="MAN"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
