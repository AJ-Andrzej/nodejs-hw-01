import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = JSON.parse(
      await fs.readFile(PATH_DB, { encoding: 'utf8' }),
    );
    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2), {
      encoding: 'utf8',
    });
    console.log('Successfully added contact');
  } catch (err) {
    console.error(err);
  }
};

addOneContact();
