import * as Yup from 'yup'

export const CompanyValidationSchema = Yup.object({
  companyName : Yup.string().required("Company name is required"),
  companyType : Yup.string().required("Company type is required"),
  companySize : Yup.string().required("Company size is required"),
  companyTnc : Yup.boolean().oneOf([true], "Please accept T&C."),
})