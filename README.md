# c5-ts-lib

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/C5m7b4/c5-ts-lib/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/C5m7b4/c5-ts-lib/tree/master)
![CircleCI](https://img.shields.io/circleci/build/github/C5m7b4/c5-ts-lib/master?style=plastic)
[![codecov](https://codecov.io/gh/C5m7b4/c5-ts-lib/branch/master/graph/badge.svg?token=eoy3bDqgts)](https://codecov.io/gh/C5m7b4/c5-ts-lib)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/C5m7b4/c5-ts-lib?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/C5m7b4/c5-ts-lib?style=plastic)
![GitHub](https://img.shields.io/github/license/c5m7b4/c5-ts-lib?style=plastic)

This is my attempt at a typescript library aimed at helping make peoples lives a little easier when coding. Here are the components that are currently offered.

- [addDays](#adddays)
- [append](#append)
- [date](#date)
- [formatDate](#formatdate)
- [formatMoney](#formatmoney)
- [isValid](#isvalid)
- [pad](#pad)
- [prop](#prop)
- [swap](#swap)

## addDays

This function will let you either pass in a string or a date object and it will add the specified days to it. If you pass in null or undefined, you will get back a new Date;

## append

This function just appends two strings

## date

This library has functions like get DateDetails, daysInMonth, isSameMonth, IsSameDay, getDayOfDate, and getMonthName

## formatDate

This function will return back a basic date like 1/1/2023. If you pass in null or undefined, you will get back an empty string.

## formatMoney

This function will nicely format money for report purposes

## isValid

This function can be used to validate that a string or a number or date or array or even an object can be used. This is your failsafe function.

## pad

This function will either left or right pad a string for you

## prop

This function fetches properties of objects

## swap

This function will swap two indexes out of an array