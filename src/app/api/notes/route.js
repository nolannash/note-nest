import { NextResponse } from "next/server"
import connect from "@/utilis/db";
import Note from '@/models/Note';

export const GET = async (request) =>{
    try {

        await connect()
        const notes = await Note.find()


        return new NextResponse(notes,{status:200});

        
    } catch (error) {
        return new NextResponse('error',{status:500});
    }

}