import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(
      await fs.readFile(PATH_DB, { encoding: 'utf8' }),
    );
    console.log(`You have ${contacts.length} contacts`);
    return contacts.length;
  } catch (err) {
    console.error(err);
  }
};

console.log(await countContacts());
