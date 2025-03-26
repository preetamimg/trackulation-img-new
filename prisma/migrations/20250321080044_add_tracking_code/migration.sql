/*
  Warnings:

  - A unique constraint covering the columns `[trackingCode]` on the table `CompanyDetail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trackingCode` to the `CompanyDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyDetail" ADD COLUMN     "trackingCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CompanyDetail_trackingCode_key" ON "CompanyDetail"("trackingCode");
