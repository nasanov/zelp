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
