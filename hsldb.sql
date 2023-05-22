-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hsldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hsldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hsldb` DEFAULT CHARACTER SET utf8 ;
USE `hsldb` ;

-- -----------------------------------------------------
-- Table `hsldb`.`2021_05`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hsldb`.`2021_05` (
  `Departure` TEXT NULL DEFAULT NULL,
  `Return` TEXT NULL DEFAULT NULL,
  `DepartureStationId` TEXT NULL DEFAULT NULL,
  `DepartureStationName` TEXT NULL DEFAULT NULL,
  `ReturnStationId` TEXT NULL DEFAULT NULL,
  `ReturnStationName` TEXT NULL DEFAULT NULL,
  `CoveredDistance` INT NULL DEFAULT NULL,
  `Duration` INT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `hsldb`.`2021_06`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hsldb`.`2021_06` (
  `CoveredDistance` INT NULL DEFAULT NULL,
  `Departure` TEXT NULL DEFAULT NULL,
  `DepartureStationId` INT NULL DEFAULT NULL,
  `DepartureStationName` TEXT NULL DEFAULT NULL,
  `Duration` INT NULL DEFAULT NULL,
  `Return` TEXT NULL DEFAULT NULL,
  `ReturnStationId` INT NULL DEFAULT NULL,
  `ReturnStationName` TEXT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `hsldb`.`2021_07`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hsldb`.`2021_07` (
  `Departure` TEXT NULL DEFAULT NULL,
  `Return` TEXT NULL DEFAULT NULL,
  `DepartureStationId` INT NULL DEFAULT NULL,
  `DepartureStationName` TEXT NULL DEFAULT NULL,
  `ReturnStationId` INT NULL DEFAULT NULL,
  `ReturnStationName` TEXT NULL DEFAULT NULL,
  `CoveredDistance` INT NULL DEFAULT NULL,
  `Duration` INT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `hsldb`.`stations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hsldb`.`stations` (
  `FID` INT NULL DEFAULT NULL,
  `ID` INT NULL DEFAULT NULL,
  `Nimi` TEXT NULL DEFAULT NULL,
  `Namn` TEXT NULL DEFAULT NULL,
  `Name` TEXT NULL DEFAULT NULL,
  `Osoite` TEXT NULL DEFAULT NULL,
  `Adress` TEXT NULL DEFAULT NULL,
  `Kaupunki` TEXT NULL DEFAULT NULL,
  `Stad` TEXT NULL DEFAULT NULL,
  `Operaattor` TEXT NULL DEFAULT NULL,
  `Kapasiteet` INT NULL DEFAULT NULL,
  `x` DOUBLE NULL DEFAULT NULL,
  `y` DOUBLE NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
