// /api/new-meetup
import prisma from '../../../lib/prisma';

async function handler(req, res) {
  // req.method, req.body, req.headers
  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;
    const newMeetup = await prisma.meetup.create({
      data,
    });
    // console.log(newMeetup);
    res.status(201).json({ message: 'meetup inserted', data: newMeetup });
  }
}

export default handler;
