/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageURL",
ADD COLUMN     "imageURLs" TEXT[];
