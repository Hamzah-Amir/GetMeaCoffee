/*
  Warnings:

  - Added the required column `amountDue` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amountPaid` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `razorpaypayment` ADD COLUMN `amountDue` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `amountPaid` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ALTER COLUMN `currency` DROP DEFAULT;
