// import connectDB from "@/app/lib/mongodb";
// import Contact from "@/app/models/contact";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//     const {fullname, email, message} = await req.json()

//     try{
//         await connectDB();
//         await Contact.create({fullname,email,message})

//         return NextResponse.json({
//             msg: ["Message sent successfully"], 
//             success: true
//         })
//     } catch(error) {
//         if (error instanceof mongoose.Error.ValidationError) {
//             const errorList: string[] = [];
//             for(const e in error.errors) {
//                 errorList.push(error.errors[e].message);
//             }

//             console.log(errorList)

//             return NextResponse.json({msg: errorList})
//         }
//         else {
//             return NextResponse.json(error)
//         }
//     }

     
// }


import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB(); // Ensure MongoDB connection

    
    await Contact.create({ fullname, email, message });

    // Return success response in JSON format
    return NextResponse.json({
      msg: ["Message sent successfully"], 
      success: true,
    });

  } catch (error) {
    // Check for validation error
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList: string[] = [];
      // Collect all validation errors from the mongoose error object
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      // Return error response in JSON format
      console.error("Validation errors:", errorList);
      return NextResponse.json({
        msg: errorList,
        success: false,
      });
    }
    
    // General error handling if not a validation error
    console.error("Unexpected error:", error);
    return NextResponse.json({
      msg: ["An unexpected error occurred."],
      success: false,
    });
  }
}
