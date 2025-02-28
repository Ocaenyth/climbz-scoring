-- DropForeignKey
ALTER TABLE "Climber" DROP CONSTRAINT "Climber_competitionCategoryId_fkey";

-- AddForeignKey
ALTER TABLE "Climber" ADD CONSTRAINT "Climber_competitionCategoryId_fkey" FOREIGN KEY ("competitionCategoryId") REFERENCES "CompetitionCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
