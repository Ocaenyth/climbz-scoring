/*
  Warnings:

  - You are about to drop the `ClimbersToSuccessfulZones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" DROP CONSTRAINT "ClimbersToSuccessfulZones_climberId_fkey";

-- DropForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" DROP CONSTRAINT "ClimbersToSuccessfulZones_zoneId_fkey";

-- DropTable
DROP TABLE "ClimbersToSuccessfulZones";

-- CreateTable
CREATE TABLE "ClimbersToMaxSuccessfulZone" (
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "climberId" UUID NOT NULL,
    "routeId" UUID NOT NULL,

    CONSTRAINT "ClimbersToMaxSuccessfulZone_pkey" PRIMARY KEY ("climberId","routeId")
);

-- AddForeignKey
ALTER TABLE "ClimbersToMaxSuccessfulZone" ADD CONSTRAINT "ClimbersToMaxSuccessfulZone_climberId_fkey" FOREIGN KEY ("climberId") REFERENCES "Climber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimbersToMaxSuccessfulZone" ADD CONSTRAINT "ClimbersToMaxSuccessfulZone_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "ClimbersToMaxSuccessfulZone" ADD COLUMN     "maxSuccessfulZone" INTEGER NOT NULL;
