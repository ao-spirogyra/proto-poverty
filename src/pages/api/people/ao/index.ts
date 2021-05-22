export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ success: true, data: 'ao' });
      break;
  }
}
