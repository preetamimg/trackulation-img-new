import * as Yup from "yup"

const planValidationSchema = Yup.object({
  planName : Yup.string().required("Name is required"),
  imageUrl : Yup.string().required("Icon is required"),
  popular : Yup.string().required("Popular is required"),
  monthlyPrice : Yup.number().required("Price is required"),
  yearlyPrice : Yup.number().required("Price is required"),
  userAccessLimit : Yup.string().required("User count is required"),
  websiteAccessLimit : Yup.string().required("Website count is required"),
  conversions : Yup.string().required("Conversion is required"),
})

export default planValidationSchema;