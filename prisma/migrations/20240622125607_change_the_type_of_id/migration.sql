/*
  Warnings:

  - The primary key for the `attendees` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxquantity" INTEGER NOT NULL DEFAULT 0,
    "id_attendee" TEXT NOT NULL,
    CONSTRAINT "ticket_id_attendee_fkey" FOREIGN KEY ("id_attendee") REFERENCES "attendees" ("attendee_id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ticket" ("create_at", "id", "id_attendee", "maxquantity") SELECT "create_at", "id", "id_attendee", "maxquantity" FROM "ticket";
DROP TABLE "ticket";
ALTER TABLE "new_ticket" RENAME TO "ticket";
CREATE TABLE "new_attendees" (
    "attendee_id" TEXT NOT NULL PRIMARY KEY,
    "attendee_name" TEXT NOT NULL,
    "attendee_email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" INTEGER NOT NULL
);
INSERT INTO "new_attendees" ("attendee_email", "attendee_id", "attendee_name", "document", "phone") SELECT "attendee_email", "attendee_id", "attendee_name", "document", "phone" FROM "attendees";
DROP TABLE "attendees";
ALTER TABLE "new_attendees" RENAME TO "attendees";
CREATE UNIQUE INDEX "attendees_attendee_email_key" ON "attendees"("attendee_email");
PRAGMA foreign_key_check("ticket");
PRAGMA foreign_key_check("attendees");
PRAGMA foreign_keys=ON;
