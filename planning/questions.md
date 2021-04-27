category active life, united states

1. DB

- Can I keep location table in business table (address and coordinates rows)
- Do I need separate ratings table

CREATE TABLE "reviews" (
"id" SERIAL PRIMARY KEY,
"user_id" INT,
"business_id" INT,
"review_text" TEXT,
"rating" INT,
"cool" boolean,
"funny" boolean,
"useful" boolean,
"created_at" timestamp
);

- Do I need categories table?
  CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "category_name" STRING
  );

business_category (link table)
business_id
category_id

URL for business

separate rows
country
state
street
to be able to search



Be able to get info by location
	to display businesses near you
list of categories


Hey Ryan, Brad. Could you look at my db schema if you have time? I wanted to start working on models and seeder files. https://github.com/nasanov/zelp/wiki/Database-Schema here is my repo. I can have 3 tables (users, reviews, businesses). But I want be able to search by locations and categories so I think I will need separate categories table and the table to link categories and businesses. And also I will need `location` table with coordiantes, country, state, street etc rows. Or will it be better to keep it simple, and have only search by business name?


location to business table
