import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const meetups = await prisma.meetup.findMany();
    return res.json({ data: meetups });
  }
}
