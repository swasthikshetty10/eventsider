/*
  Warnings:

  - You are about to drop the column `paymetInfo` on the `PaymentOrder` table. All the data in the column will be lost.
  - Added the required column `paymentInfo` to the `PaymentOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PaymentOrder` DROP COLUMN `paymetInfo`,
    ADD COLUMN `paymentInfo` JSON NOT NULL;
