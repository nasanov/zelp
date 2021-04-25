CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" STRING(50),
  "email" STRING(255),
  "hashed_password" STRINGBINARY
);

CREATE TABLE "businesses" (
  "id" SERIAL PRIMARY KEY,
  "name" STRING(255),
  "image_url" STRING(255),
  "is_closed" BOOLEAN,
  "categories" ARRAY(STRING(50)),
  "price" STRING(5),
  "phone" STRING(50),
  "hours" ARRAY(STRING(50)),
  "photos" ARRAY(STRING(255))
);

CREATE TABLE "location" (
  "id" SERIAL PRIMARY KEY,
  "business_id" INT,
  "address" STRING(255),
  "coordinates" ARRAY(STRING(50))
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "business_id" INT,
  "review_text" TEXT,
  "rating" INT,
  "created_at" timestamp
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("user_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "reviews" ("business_id");

ALTER TABLE "businesses" ADD FOREIGN KEY ("id") REFERENCES "location" ("business_id");
