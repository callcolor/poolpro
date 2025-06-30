import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contacts", async (req, res) => {
    const resp = await storage.createContact(req.body);
    res.send(resp);
  });

  const httpServer = createServer(app);
  return httpServer;
}
