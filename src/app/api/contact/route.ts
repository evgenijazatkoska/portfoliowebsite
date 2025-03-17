import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Starting POST request");

    const { fullname, email, message } = await req.json();
    console.log("Request body:", { fullname, email, message });

  
    if (!fullname || !email || !message) {
      console.log("Validation failed: Missing fields");
      return NextResponse.json({
        msg: ["All fields are required."],
        success: false,
      });
    }

   
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected");

  
    console.log("Creating contact entry...");
    await Contact.create({ fullname, email, message });
    console.log("Contact entry created");

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in POST /api/contact:", error.message, error.stack);
    } else {
      console.error("Error in POST /api/contact:", error);
    }

   
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList: string[] = [];
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.error("Validation errors:", errorList);
      return NextResponse.json({
        msg: errorList,
        success: false,
      });
    }

    if (error instanceof Error && error.message.includes("MongoDB connection failed")) {
      return NextResponse.json({
        msg: ["Failed to connect to the database."],
        success: false,
      });
    }

    
    return NextResponse.json({
      msg: ["An unexpected error occurred."],
      success: false,
    });
  }
}


export async function GET() {
  return NextResponse.json({
    msg: "This API route only supports POST requests.",
    success: false,
  });
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  return new Response(null, { headers });
}