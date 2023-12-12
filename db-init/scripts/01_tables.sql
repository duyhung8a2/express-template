CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE "user_role" AS ENUM (
    'admin',
    'teacher',
    'student',
    'parent',
    'user'
);

CREATE TYPE "user_sex" AS ENUM ('male', 'female', 'other');

CREATE TABLE "user" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
    "address" varchar,
    "name" varchar,
    "phone" varchar,
    "birthday" TIMESTAMP,
    "email" varchar,
    "ssn" varchar UNIQUE,
    "sex" "user_sex",
    "create_at" TIMESTAMP DEFAULT (now()) NOT NULL,
    "update_at" TIMESTAMP DEFAULT (now()) NOT NULL,
    "deleted" boolean DEFAULT False NOT NULL,
    "user_uuid" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "role" "user_role" NOT NULL
);