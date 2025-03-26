import { countryList } from "@/app/_constants/countryList"
import { NextResponse } from "next/server"

export const GET  = async () => {
  try {
    return NextResponse.json({
      success : true,
      message : "Country list fetched successfully",
      data : countryList
    })
  } catch (error) {
    console.log('error', error)
  }
}