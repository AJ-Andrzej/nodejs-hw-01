import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const generateContactsData = [];
  for (let i = 0; i < number; i += 1) {
    const data = createFakeContact();
    generateContactsData.push(data);
  }
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(generateContactsData, undefined, 2),
      {
        encoding: 'utf8',
      },
    );
    console.log('done');
  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);
