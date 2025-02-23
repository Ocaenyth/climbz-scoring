/*
  Warnings:

  - You are about to drop the `Zone` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `zoneCount` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Zone" DROP CONSTRAINT "Zone_routeId_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "zoneCount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Zone";
