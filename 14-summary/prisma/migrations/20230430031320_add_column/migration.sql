/*
  Warnings:

  - Added the required column `details` to the `Meetup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Meetup` ADD COLUMN `details` VARCHAR(191) NOT NULL;
