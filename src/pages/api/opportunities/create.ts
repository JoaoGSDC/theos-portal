import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

export default async (request: any, response: any): Promise<any> => {
  try {
    const { name, cpf, resume, vacancyId } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);
    const opportunitiesCollection = db.collection('vacancies');

    const opportunities = opportunitiesCollection.insertOne({
      name,
      cpf,
      resume,
      vacancyId,
    });

    return response.json(opportunities);
  } catch (error: any) {
    return response.json(error);
  }
};
