-- DropForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" DROP CONSTRAINT "ClimbersToSuccessfulZones_climberId_fkey";

-- DropForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" DROP CONSTRAINT "ClimbersToSuccessfulZones_zoneId_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_wallId_fkey";

-- DropForeignKey
ALTER TABLE "Zone" DROP CONSTRAINT "Zone_routeId_fkey";

-- AlterTable
ALTER TABLE "Climber" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" ADD CONSTRAINT "ClimbersToSuccessfulZones_climberId_fkey" FOREIGN KEY ("climberId") REFERENCES "Climber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" ADD CONSTRAINT "ClimbersToSuccessfulZones_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_wallId_fkey" FOREIGN KEY ("wallId") REFERENCES "Wall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;
