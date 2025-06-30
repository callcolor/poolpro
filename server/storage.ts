import { type Contact } from "@shared/schema";

export interface IStorage {
  createContact(contact: Contact): Promise<string>;
}

export class Storage implements IStorage {
  async createContact(contact: Contact) {
    if (!process.env.POOLPROSWH) {
      throw new Error("POOLPROSWH environment variable is not set.");
    }

    await fetch(process.env.POOLPROSWH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: JSON.stringify(contact, null, 2),
        username: "HeartlandPoolCare.com",
      }),
    });

    return "OK";
  }
}

export const storage = new Storage();
