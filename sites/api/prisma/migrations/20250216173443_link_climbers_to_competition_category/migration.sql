/*
  Warnings:

  - Added the required column `competitionCategoryId` to the `Climber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Climber" ADD COLUMN     "competitionCategoryId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Climber" ADD CONSTRAINT "Climber_competitionCategoryId_fkey" FOREIGN KEY ("competitionCategoryId") REFERENCES "CompetitionCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
