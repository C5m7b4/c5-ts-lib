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
- [Box](#box)
- [Bubble Sort](#bubble-sort)
- [compose](#compose)
- [curry](#curry)
- [date](#date)
- [formatDate](#formatdate)
- [formatMoney](#formatmoney)
- [Id](#id)
- [isValid](#isvalid)
- [Maybe](#maybe)
- [pad](#pad)
- [prop](#prop)
- [PubSub](#pubsub)
- [QuickSort](#quicksort)
- [Queue](#queue)
- [Stack](#stack)
- [swap](#swap)
- [trace](#trace)
- [traceMap](#tracemap)

## addDays

This function will let you either pass in a string or a date object and it will add the specified days to it. If you pass in null or undefined, you will get back a new Date;

## append

This function just appends two strings

## Box

This monad has many uses. It allow you to map over your data to transform it into anything you want.

## Bubble Sort

A sorting algorithm that loops through all the elements and compares the current element to the next element and uses a swapping technique to handle the sorting

## compose

This function will chain together a number of functions passing the output of each function to the input of the next function

## curry

This is a very powerful function that allows you to curry a function that takes multiple arguments and create functions from that that can take each argument one at a time and return another function until all the arguments have been supplied.

## date

This library has functions like get DateDetails, daysInMonth, isSameMonth, IsSameDay, getDayOfDate, and getMonthName

## formatDate

This function will return back a basic date like 1/1/2023. If you pass in null or undefined, you will get back an empty string.

## formatMoney

This function will nicely format money for report purposes

## Id

This is the identity monad

## isValid

This function can be used to validate that a string or a number or date or array or even an object can be used. This is your failsafe function.

## Maybe

Another monad, but this one handle null input very well

## pad

This function will either left or right pad a string for you

## PubSub

A really nice publisher/subscriber algorithm

## prop

This function fetches properties of objects

## stack

This class is the classic stack class. It is LIFO(last in, first out)

## QuickSort

A Sorting algorithm that uses a pivot to split data and then sort the left and right and then swap out indexes in the array to sort the data. This supports ascending and desending order as well as arrays of objects. 

## queue

queue is a data struccture that is FIFO (first in first out)
these are the methods

- enqueue
- dequeue
- size

## swap

This function will swap two indexes out of an array

## trace

This function can be used to debug your monads

## traceMap

This is another useful debugging tool for you monads