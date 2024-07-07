import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = JSON.parse(
      await fs.readFile(PATH_DB, { encoding: 'utf8' }),
    );
    const newContacts = contacts.slice(0, -1);
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts, undefined, 2));
    console.log('Contact uccessfully deleted');
  } catch (err) {
    console.error(err);
  }
};

removeLastContact();
