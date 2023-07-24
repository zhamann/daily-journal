import fs from 'fs';
import path from 'path';

interface JournalEntry {
  date: string;
  text: string;
}

interface JournalData {
  journal: JournalEntry[];
}

export async function POST(request: Request) {
  const res = await request.json()
  const { date, text } = res as JournalEntry;

  // Read the existing data (if any) from journal.json
  const dataFilePath = path.join(process.cwd(), 'data/journal.json');
  let existingData: JournalData = { journal: [] };
  if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    existingData = JSON.parse(rawData) as JournalData;
  }

  // Append the new data to the existing data array
  existingData.journal.unshift({ date, text });

  // Write the updated data back to journal.json
  fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

  return new Response('Data written to journal.json successfully.');
}
