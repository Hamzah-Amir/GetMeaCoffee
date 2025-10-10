/*
  Warnings:

  - You are about to drop the `stripepayment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `stripepayment` DROP FOREIGN KEY `StripePayment_userId_fkey`;

-- DropTable
DROP TABLE `stripepayment`;

-- CreateTable
CREATE TABLE `RazorpayPayment` (
    `orderId` VARCHAR(191) NOT NULL,
    `to_user` VARCHAR(191) NOT NULL,
    `from_user` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'INR',

    INDEX `RazorpayPayment_to_user_idx`(`to_user`),
    INDEX `RazorpayPayment_from_user_idx`(`from_user`),
    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RazorpayPayment` ADD CONSTRAINT `RazorpayPayment_from_user_fkey` FOREIGN KEY (`from_user`) REFERENCES `User`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;
