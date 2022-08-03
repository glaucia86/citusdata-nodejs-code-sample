CREATE TABLE pharmacy (
  pharmacy_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  pharmacy_name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip_code INTEGER NOT NULL
);