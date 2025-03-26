import { useQuery } from "@tanstack/react-query"
import { getAPI } from "../_services/apiInstance"
import { PlanWithAddOns } from "../_store/adminPlansStore/slices/newPlanSlice"
import { currencyListTypes } from "../_constants/currencyList"
import { countryListTypes } from "../_constants/countryList"

// type UseGlobalOptions = {
//   isFetchPlans?: boolean;
//   isFetchCurrency?: boolean;
//   isFetchCountry?: boolean;
//   isFetchTimezones?: boolean;
// };

const useGlobal = ({isFetchPlans = false, isFetchCurrency = false, isFetchCountry = false, isFetchTimezones = false} = {}) => {

  // get plans
  const fetchPlans = async (): Promise<PlanWithAddOns[]>=> {
    try {
      const res = await getAPI('api/userPlans')
      return res?.data?.plans || []
    } catch (error) {
      console.log(error)
      return []
    }
  }
  // get plans query 
  const {data : userPlans = [], isLoading : planLoading} = useQuery({
    queryKey : ["userPlans"],
    queryFn : fetchPlans,
    enabled : isFetchPlans
  })

    // get currency
    const fetchCurrencyList = async (): Promise<currencyListTypes[]>=> {
      try {
        const res = await getAPI('api/currency')
        return res?.data?.data || []
      } catch (error) {
        console.log(error)
        return []
      }
    }
    // get currency query 
    const {data : currencyList = [], isLoading : currencyLoading} = useQuery({
      queryKey : ["currencyList"],
      queryFn : fetchCurrencyList,
      enabled : isFetchCurrency
    })

    // get country
    const fetchCountryList = async (): Promise<countryListTypes[]>=> {
      try {
        const res = await getAPI('api/country')
        return res?.data?.data || []
      } catch (error) {
        console.log(error)
        return []
      }
    }
    // get country query 
    const {data : countryList = [], isLoading : countryLoading} = useQuery({
      queryKey : ["countryList"],
      queryFn : fetchCountryList,
      enabled : isFetchCountry
    })

    // get timezones
    const fetchTimezonesList = async (): Promise<string[]>=> {
      try {
        const res = await getAPI('api/timezone')
        return res?.data?.data || []
      } catch (error) {
        console.log(error)
        return []
      }
    }
    // get timezones query 
    const {data : timezoneList = [], isLoading : timezoneLoading} = useQuery({
      queryKey : ["timezoneList"],
      queryFn : fetchTimezonesList,
      enabled : isFetchTimezones
    })

  return {userPlans, planLoading, currencyList, currencyLoading, countryList, countryLoading, timezoneList, timezoneLoading}
}

export default useGlobal