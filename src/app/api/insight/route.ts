import { createIncrementQuery } from '@/database/queries';
import { VALID_FIELD, VALID_FIELDS } from '@/utils/insight';

export async function POST(request: Request) {
  const field = await request.text();
  if (VALID_FIELDS.includes(field as VALID_FIELD)) {
    try {
      createIncrementQuery().run(field);
    } catch (e) {
      console.error('Failed to increment insight', e);
    }
    return new Response();
  } else {
    return new Response('Invalid', { status: 400 });
  }
}
