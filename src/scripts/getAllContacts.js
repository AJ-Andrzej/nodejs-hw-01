import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = JSON.parse(
      await fs.readFile(PATH_DB, { encoding: 'utf8' }),
    );
    console.log('Successfully got contacts');
    return contacts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
