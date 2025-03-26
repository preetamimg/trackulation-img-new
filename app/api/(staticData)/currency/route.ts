import { currencyList } from "@/app/_constants/currencyList"
import { NextResponse } from "next/server"

export const GET  = async () => {
  try {
    return NextResponse.json({
      success : true,
      message : "Currency list fetched successfully",
      data : currencyList
    })
  } catch (error) {
    console.log('error', error)
  }
}