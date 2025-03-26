-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('ADVERTISER', 'AGENCY', 'OTHER');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyType" "CompanyType" NOT NULL,
    "companySize" TEXT NOT NULL,
    "addedBy" TEXT NOT NULL,
    "companyTnc" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyDetail" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "companyWebsite" TEXT NOT NULL,
    "companyWebsiteName" TEXT NOT NULL,
    "countryId" TEXT,
    "currency" TEXT,
    "timezone" TEXT,
    "analyticStatus" TEXT,
    "marketingStatus" TEXT,
    "extendedUrl" TEXT[],
    "addedBy" TEXT NOT NULL,
    "cookiePolicy" BOOLEAN NOT NULL DEFAULT false,
    "knowledgeConsent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CompanyDetail_companyId_idx" ON "CompanyDetail"("companyId");

-- AddForeignKey
ALTER TABLE "CompanyDetail" ADD CONSTRAINT "CompanyDetail_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
