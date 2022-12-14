/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `PaymentOrder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `PaymentOrder_orderId_key` ON `PaymentOrder`(`orderId`);
