// import connectDB from "@/app/lib/mongodb";
// import Contact from "@/app/models/contact";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { fullname, email, message } = await req.json();

//   if (!fullname || !email || !message) {
//     return NextResponse.json({
//       msg: ["All fields are required."],
//       success: false,
//     });
//   }

//   try {
//     await connectDB();

//     await Contact.create({ fullname, email, message });

//     return NextResponse.json({
//       msg: ["Message sent successfully"],
//       success: true,
//     });
//   } catch (error) {
//     if (error instanceof mongoose.Error.ValidationError) {
//       const errorList: string[] = [];

//       for (const e in error.errors) {
//         errorList.push(error.errors[e].message);
//       }

//       console.error("Validation errors:", errorList);
//       return NextResponse.json({
//         msg: errorList,
//         success: false,
//       });
//     }

//     console.error("Unexpected error:", error);
//     return NextResponse.json({
//       msg: ["An unexpected error occurred."],
//       success: false,
//     });
//   }
// }
// export async function GET() {
//   return NextResponse.json({
//     msg: "This API route only supports POST requests.",
//     success: false,
//   });
// }

// export async function OPTIONS() {
//   const headers = new Headers();
//   headers.set("Access-Control-Allow-Origin", "*");
//   headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
//   headers.set("Access-Control-Allow-Headers", "Content-Type");

//   return new Response(null, { headers });
// }

import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Starting POST request");

    // Parse the request body
    const { fullname, email, message } = await req.json();
    console.log("Request body:", { fullname, email, message });

    // Validate the input
    if (!fullname || !email || !message) {
      console.log("Validation failed: Missing fields");
      return NextResponse.json({
        msg: ["All fields are required."],
        success: false,
      });
    }

    // Connect to the database
    console.log("Connecting to database...");
    await connectDB();
    console.log("Database connected");

    // Create a new contact entry
    console.log("Creating contact entry...");
    await Contact.create({ fullname, email, message });
    console.log("Contact entry created");

    // Return success response
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    // Log the full error details
    if (error instanceof Error) {
      console.error("Error in POST /api/contact:", error.message, error.stack);
    } else {
      console.error("Error in POST /api/contact:", error);
    }

    // Handle validation errors
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

    // Handle unexpected errors
    return NextResponse.json({
      msg: ["An unexpected error occurred."],
      success: false,
    });
  }
}

// Optional: Handle GET requests for debugging
export async function GET() {
  return NextResponse.json({
    msg: "This API route only supports POST requests.",
    success: false,
  });
}

// Optional: Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  return new Response(null, { headers });
}