/*
  Warnings:

  - You are about to drop the column `billingAddress` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `billingName` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `brand` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `expMonth` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `expYear` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `failureCode` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `failureMessage` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `failureType` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `last4` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethodId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethodType` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `retryCount` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeAccountId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeChargeId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeCustomerId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeDisputeId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeRefundId` on the `stripepayment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeTransferId` on the `stripepayment` table. All the data in the column will be lost.
  - Added the required column `name` to the `StripePayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_user` to the `StripePayment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `StripePayment_stripeChargeId_key` ON `stripepayment`;

-- DropIndex
DROP INDEX `StripePayment_stripeCustomerId_idx` ON `stripepayment`;

-- AlterTable
ALTER TABLE `stripepayment` DROP COLUMN `billingAddress`,
    DROP COLUMN `billingName`,
    DROP COLUMN `brand`,
    DROP COLUMN `expMonth`,
    DROP COLUMN `expYear`,
    DROP COLUMN `failureCode`,
    DROP COLUMN `failureMessage`,
    DROP COLUMN `failureType`,
    DROP COLUMN `last4`,
    DROP COLUMN `paymentMethodId`,
    DROP COLUMN `paymentMethodType`,
    DROP COLUMN `retryCount`,
    DROP COLUMN `stripeAccountId`,
    DROP COLUMN `stripeChargeId`,
    DROP COLUMN `stripeCustomerId`,
    DROP COLUMN `stripeDisputeId`,
    DROP COLUMN `stripeRefundId`,
    DROP COLUMN `stripeTransferId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `to_user` VARCHAR(191) NOT NULL;
