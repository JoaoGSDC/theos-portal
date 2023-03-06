import { Db } from 'mongodb';
import connectToDatabase from '../connection';

export default async (request: any, response: any): Promise<any> => {
  let clients: any[] = [];

  try {
    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    await db
      .collection('clients')
      .find()
      .sort({
        createdAt: -1,
      })
      .toArray()
      .then((results: any) => (clients = results))
      .catch((error) => console.error(error));

    console.log('\nAll values of clients status: Success!\n');
  } catch (error: any) {
    console.log('All values of clients status: Fail!');
    return response.json(error);
  }

  return response.json(clients);
};
