-- CreateTable
CREATE TABLE "attendees" (
    "attendee_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attendee_name" TEXT NOT NULL,
    "attendee_email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "phone" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxquantity" INTEGER NOT NULL DEFAULT 0,
    "id_attendee" INTEGER NOT NULL,
    CONSTRAINT "ticket_id_attendee_fkey" FOREIGN KEY ("id_attendee") REFERENCES "attendees" ("attendee_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "attendees_attendee_email_key" ON "attendees"("attendee_email");
