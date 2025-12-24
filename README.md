# MongoDB CRUD Lab

This repository contains a comprehensive demonstration of MongoDB CRUD operations, developed as part of a university laboratory exercise. It showcases various techniques for interacting with a NoSQL database, including complex document insertions, nested field updates, array manipulations, and advanced querying.

## Overview

The project implements a student management system within a `university` database. It utilizes the following MongoDB features:
- Document insertion using `insertMany`.
- Querying with filters on embedded documents and arrays.
- Atomic updates using `$set`, `$inc`, and `$unset`.
- Managing complex data structures (nested objects and arrays).

## Implementation Details

The core logic is contained in `solutions.js`. The script performs the following operations:
1.  **Database Initialization**: Creates the `university` database and `students` collection.
2.  **Data Insertion**: Populates the collection with sample student records containing academic details, contact information, and grades.
3.  **Data Retrieval**: Demonstrates filtering based on geographical location, specific course enrollment, and age ranges.
4.  **Data Modification**:
    - Updates individual student records (embedded grade fields).
    - Bulk updates based on specific criteria (adding a completion status and incrementing age).
    - Field removal from existing documents.

## Requirements

To run the script, ensure the following are installed and configured:
- MongoDB Server
- MongoDB Shell (mongosh)

## Execution Instructions

The script can be executed directly using the MongoDB Shell:

```bash
mongosh < solutions.js
```

If using Docker, you can run the following command:

```bash
docker exec -i <container_name> mongosh --quiet < solutions.js
```

## Dataset Structure

Each student document follows this schema:
- `name`: String
- `age`: Number
- `year`: Number
- `courses`: Array of Strings
- `address`: Embedded Document (city, street)
- `grades`: Embedded Document (midterm, final)
- `passed`: Boolean (added during execution)