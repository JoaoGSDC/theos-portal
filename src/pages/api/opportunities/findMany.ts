import { Db, ObjectId } from 'mongodb';
import connectToDatabase from '../connection';

export default async (request: any, response: any): Promise<any> => {
  let opportunities: any[] = [];
  let client: any = {};

  try {
    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    const { limit, page, company, filter } = request.query;

    let _company: any = {};
    let companyId = '';

    if (company !== '' && company != undefined) {
      _company = (
        await db
          .collection('clients')
          .find({ company: { $regex: company, $options: 'i' } })
          .toArray()
      )[0];

      companyId = _company?._id ?? '';
    }

    let query: any = {};

    if (company !== '' && companyId !== '' && company != undefined && companyId != undefined) {
      query.company = { $eq: companyId.toString() };
    }

    if (company !== '' && companyId == '' && company != undefined) {
      query.company = { $eq: undefined };
    }

    if (filter !== '' && filter != undefined) {
      query.name = { $regex: filter, $options: 'i' };
    }

    await db
      .collection('opportunity')
      .find(query)
      .sort({
        createdAt: -1,
      })
      .limit(Number(limit))
      .skip(Number(page))
      .toArray()
      .then((results: any) => (opportunities = results))
      .catch((error) => console.error(error));

    await Promise.all(
      opportunities.map(async (opportunity) => {
        const _client = await db.collection('clients').findOne({ _id: new ObjectId(opportunity.company) });
        opportunity.companyName = _client?.company;
        return opportunity;
      })
    );

    client = _company;

    console.log('\nAll values of opportunities status: Success!\n');
  } catch (error: any) {
    console.log('All values of clients status: Fail!');
    console.log(error);
    return response.json(error);
  }

  return response.json({ opportunities, client });
};
