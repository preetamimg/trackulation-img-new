import * as Yup from "yup"

export const trackingContainerValidationSchema = Yup.object({
  companyId : Yup.string().required("Please select company"),
  companyWebsite : Yup.string().url("company website must be a valid url").required("Company website is required"),
  companyWebsiteName : Yup.string().required("Company name is required"),
  countryId : Yup.string().required("Please select country"),
  currency : Yup.string().required("Please select currency"),
  timezone : Yup.string().required("Please select timezone")
})