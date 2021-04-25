# **Database Schema**

## **`users`**

| column name     | data type     | details               |
| --------------- | ------------- | --------------------- |
| id              | INT           | NOT NULL, PRIMARY KEY |
| username        | STRING(50)    | NOT NULL              |
| email           | STRING(255)   | NOT NULL, UNIQUE      |
| hashed_password | STRING.BINARY | NOT NULL              |
| createdAt       | DATETIME      | NOT NULL              |
| updatedAt       | DATETIME      | NOT NULL              |

## **`businesses`**

| column name | data type          | details               |
| ----------- | ------------------ | --------------------- |
| id          | INT                | NOT NULL, PRIMARY KEY |
| name        | STRING(255)        | NOT NULL              |
| image_url   | STRING(255)        | NOT NULL              |
| is_closed   | BOOLEAN            | NOT NULL              |
| categories  | ARRAY(STRING(50))  | NOT NULL              |
| price       | STRING(5)          |                       |
| phone       | STRING(50)         |                       |
| hours       | ARRAY(STRING(50))  |                       |
| photos      | ARRAY(STRING(255)) |                       |
| about       | TEXT               |                       |
| url         | STRING(255)        |                       |

## **`location`**

| column name | data type         | details               |
| ----------- | ----------------- | --------------------- |
| id          | INT               | NOT NULL, PRIMARY KEY |
| business_id | INT               | NOT NULL              |
| address     | STRING(255)       | NOT NULL              |
| coordinates | ARRAY(STRING(50)) | NOT NULL              |

- `location.business_id` references `businesses.id` table

## **`reviews`**

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | INT       | NOT NULL, PRIMARY KEY |
| user_id     | INT       | NOT NULL              |
| business_id | INT       | NOT NULL              |
| review_text | INT       | NOT NULL              |
| rating      | INT       | NOT NULL              |
| created_at  | TIMESTAMP | NOT NULL              |

- `reviews.user_id` references `users.id` table
- `reviews.business_id` references `businesses.id` table
