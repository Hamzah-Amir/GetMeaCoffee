/*
  Warnings:

  - You are about to drop the column `status` on the `razorpaypayment` table. All the data in the column will be lost.
  - Added the required column `message` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `razorpaypayment` DROP COLUMN `status`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL;
