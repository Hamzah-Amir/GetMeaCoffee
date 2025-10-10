/*
  Warnings:

  - You are about to drop the column `amountDue` on the `razorpaypayment` table. All the data in the column will be lost.
  - You are about to drop the column `amountPaid` on the `razorpaypayment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `razorpaypayment` table. All the data in the column will be lost.
  - You are about to drop the column `from_user` on the `razorpaypayment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `razorpaypayment` table. All the data in the column will be lost.
  - Added the required column `name` to the `RazorpayPayment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `razorpaypayment` DROP FOREIGN KEY `RazorpayPayment_from_user_fkey`;

-- AlterTable
ALTER TABLE `razorpaypayment` DROP COLUMN `amountDue`,
    DROP COLUMN `amountPaid`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `from_user`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `RazorpayPayment_name_idx` ON `RazorpayPayment`(`name`);

-- AddForeignKey
ALTER TABLE `RazorpayPayment` ADD CONSTRAINT `RazorpayPayment_name_fkey` FOREIGN KEY (`name`) REFERENCES `User`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
