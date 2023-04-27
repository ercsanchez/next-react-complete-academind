// /api/new-meetup

function handler(req, res) {
  // req.method, req.body, req.headers
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
