import { timezones } from "@/app/_constants/timezones"
import { NextResponse } from "next/server"

export const GET  = async () => {
  try {
    return NextResponse.json({
      success : true,
      message : "timezones list fetched successfully",
      data : timezones
    })
  } catch (error) {
    console.log('error', error)
  }
}