-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "popular" BOOLEAN NOT NULL DEFAULT false,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "monthlyPrice" INTEGER NOT NULL DEFAULT 0,
    "yearlyPrice" INTEGER NOT NULL DEFAULT 0,
    "userAccessLimit" TEXT,
    "websiteAccessLimit" TEXT,
    "conversions" BOOLEAN NOT NULL DEFAULT false,
    "addons" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
