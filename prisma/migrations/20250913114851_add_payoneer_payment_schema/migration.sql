-- CreateTable
CREATE TABLE `PayoneerPayment` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `payoneerTransactionId` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'USD',
    `status` ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
    `description` VARCHAR(191) NULL,
    `payoneerAccountId` VARCHAR(191) NULL,
    `payoneerReferenceId` VARCHAR(191) NULL,
    `payoneerBatchId` VARCHAR(191) NULL,
    `recipientEmail` VARCHAR(191) NULL,
    `recipientName` VARCHAR(191) NULL,
    `paymentMethod` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `processedAt` DATETIME(3) NULL,
    `errorCode` VARCHAR(191) NULL,
    `errorMessage` VARCHAR(191) NULL,
    `retryCount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `PayoneerPayment_payoneerTransactionId_key`(`payoneerTransactionId`),
    INDEX `PayoneerPayment_userId_idx`(`userId`),
    INDEX `PayoneerPayment_status_idx`(`status`),
    INDEX `PayoneerPayment_createdAt_idx`(`createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PayoneerPayment` ADD CONSTRAINT `PayoneerPayment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
