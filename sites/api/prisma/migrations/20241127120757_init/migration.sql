-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('WOMAN', 'MAN', 'OTHER');

-- CreateTable
CREATE TABLE "Climber" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Climber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wall" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "number" INTEGER NOT NULL,

    CONSTRAINT "Wall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "wallId" UUID NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zone" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "number" INTEGER NOT NULL,
    "routeId" UUID NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClimbersToSuccessfulZones" (
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "climberId" UUID NOT NULL,
    "zoneId" UUID NOT NULL,

    CONSTRAINT "ClimbersToSuccessfulZones_pkey" PRIMARY KEY ("climberId","zoneId")
);

-- CreateTable
CREATE TABLE "CompetitionCategory" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "minAge" INTEGER NOT NULL,
    "maxAge" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "CompetitionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Route_name_key" ON "Route"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Zone_number_routeId_key" ON "Zone"("number", "routeId");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionCategory_name_gender_key" ON "CompetitionCategory"("name", "gender");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_wallId_fkey" FOREIGN KEY ("wallId") REFERENCES "Wall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zone" ADD CONSTRAINT "Zone_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" ADD CONSTRAINT "ClimbersToSuccessfulZones_climberId_fkey" FOREIGN KEY ("climberId") REFERENCES "Climber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClimbersToSuccessfulZones" ADD CONSTRAINT "ClimbersToSuccessfulZones_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
