/*
  Warnings:

  - You are about to alter the column `paymetInfo` on the `PaymentOrder` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `PaymentOrder` MODIFY `paymetInfo` JSON NOT NULL;
