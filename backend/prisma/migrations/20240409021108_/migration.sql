/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Url_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Url_id_key" ON "Url"("id");
