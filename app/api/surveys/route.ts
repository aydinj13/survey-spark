// app/api/surveys/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { title, userId } = await request.json();
  try {
    const survey = await prisma.survey.create({
      data: { title, userId },
    });
    return NextResponse.json(survey);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating survey' }, { status: 400 });
  }
}