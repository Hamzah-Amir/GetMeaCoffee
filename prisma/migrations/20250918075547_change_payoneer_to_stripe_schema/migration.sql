/*
  Warnings:

  - You are about to drop the `payoneerpayment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payoneerpayment` DROP FOREIGN KEY `PayoneerPayment_userId_fkey`;

-- DropTable
DROP TABLE `payoneerpayment`;

-- CreateTable
CREATE TABLE `StripePayment` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `stripePaymentIntentId` VARCHAR(191) NOT NULL,
    `stripeChargeId` VARCHAR(191) NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `amountReceived` DECIMAL(10, 2) NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'usd',
    `status` ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
    `description` VARCHAR(191) NULL,
    `stripeCustomerId` VARCHAR(191) NULL,
    `stripeAccountId` VARCHAR(191) NULL,
    `stripeTransferId` VARCHAR(191) NULL,
    `stripeRefundId` VARCHAR(191) NULL,
    `stripeDisputeId` VARCHAR(191) NULL,
    `paymentMethodId` VARCHAR(191) NULL,
    `paymentMethodType` VARCHAR(191) NULL,
    `last4` VARCHAR(191) NULL,
    `brand` VARCHAR(191) NULL,
    `expMonth` INTEGER NULL,
    `expYear` INTEGER NULL,
    `billingEmail` VARCHAR(191) NULL,
    `billingName` VARCHAR(191) NULL,
    `billingAddress` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `processedAt` DATETIME(3) NULL,
    `failureCode` VARCHAR(191) NULL,
    `failureMessage` VARCHAR(191) NULL,
    `failureType` VARCHAR(191) NULL,
    `retryCount` INTEGER NOT NULL DEFAULT 0,
    `metadata` TEXT NULL,

    UNIQUE INDEX `StripePayment_stripePaymentIntentId_key`(`stripePaymentIntentId`),
    UNIQUE INDEX `StripePayment_stripeChargeId_key`(`stripeChargeId`),
    INDEX `StripePayment_userId_idx`(`userId`),
    INDEX `StripePayment_status_idx`(`status`),
    INDEX `StripePayment_createdAt_idx`(`createdAt`),
    INDEX `StripePayment_stripeCustomerId_idx`(`stripeCustomerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StripePayment` ADD CONSTRAINT `StripePayment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
