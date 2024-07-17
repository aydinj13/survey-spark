// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, name } = await request.json();
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
}