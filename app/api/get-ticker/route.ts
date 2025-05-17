import { NextResponse } from "next/server";
import { db } from "@/lib/utils/db";

export interface Company {
  value: string;
  label: string;
  [key: string]: string; 
}

export async function GET(req: Request) {
  let connection;
  try {
    connection = await db.getConnection();
    const [rows] = await connection.query("SELECT name, full_name FROM ticker");

    console.log("Query result:", JSON.stringify(rows, null, 2)); 

    if (!Array.isArray(rows) || rows.length === 0) {
      console.warn("No data returned from ticker table");
      return NextResponse.json({}, { status: 200 }); 
    }

    const companyMap = (rows as { name: string; full_name: string }[]).reduce(
      (acc, company) => {
        if (company.name && company.full_name) {
          acc[company.name] = company.full_name;
        } else {
          console.warn("Skipping invalid row:", company);
        }
        return acc;
      },
      {} as Record<string, string>
    );

    const company = (rows as { name: string; full_name: string }[]).reduce(
      (acc, cmp) => {
        if (cmp.name && cmp.full_name) {
          acc[cmp.name] = cmp.full_name;
        } else {
          console.warn("Skiinvalid row:",cmp);
        }
        return acc;
      }, {} as Company
    )

    if (Object.keys(companyMap).length === 0) {
      console.warn("Company map is empty after transformation");
    }

    return NextResponse.json({
      message: "fetch successful", 
      cmap: companyMap,
      cmp: company
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}