CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"titre" text NOT NULL,
	"description" text,
	"due_date" timestamp,
	"assigned_to" text,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "documents" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"filename" text NOT NULL,
	"mime_type" text NOT NULL,
	"size" integer NOT NULL,
	"key" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "character" ADD COLUMN "playerName" text NOT NULL;