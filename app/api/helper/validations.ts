import { z } from "zod";

// Company Validation
export const CompanySchema = z.object({
    companyName: z.string().min(3, "Company name must be at least 3 characters"),
    companyType: z.enum(["ADVERTISER", "AGENCY", "OTHER"]),
    companySize: z.string(),
    companyTnc: z.boolean(),
    addedBy: z.string().min(3, "AddedBy must be a valid user ID"),
});

// Company Detail Validation
export const CompanyDetailSchema = z.object({
    companyId: z.string(),
    companyWebsite: z.string().url("Invalid URL"),
    companyWebsiteName: z.string().min(2, "Website name is required"),
    countryId: z.string().optional(),
    currency: z.string().optional(),
    timezone: z.string().optional(),
    analyticStatus: z.string().optional(),
    marketingStatus: z.string().optional(),
    extendedUrl: z.array(z.string().url()).optional(),
    addedBy: z.string().min(3, "AddedBy must be a valid user ID"),
    cookiePolicy: z.boolean(),
    knowledgeConsent: z.boolean(),
});
