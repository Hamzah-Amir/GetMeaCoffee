/*
  Warnings:

  - The primary key for the `stripepayment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `stripepayment` table. All the data in the column will be lost.
  - The required column `orderId` was added to the `StripePayment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `stripepayment` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`orderId`);
