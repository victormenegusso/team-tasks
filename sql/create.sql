CREATE DATABASE sup;

CREATE TABLE public.tasks (
	title varchar(50) NOT NULL,
	"desc" varchar NOT NULL,
	"type" varchar(20) NOT NULL,
	status varchar(20) NOT NULL,
	create_at timestamp NOT NULL,
	start_at timestamp NULL,
	finish_at timestamp NULL,
	"owner" varchar NOT NULL,
	responsible varchar NULL,
	id serial NOT NULL,
	CONSTRAINT tasks_pk PRIMARY KEY (id)
);

CREATE TABLE public.comments (
	"desc" varchar NOT NULL,
	"type" varchar(20) NOT NULL,
	status varchar(20) NOT NULL,
	create_at timestamp NOT NULL,
	start_at timestamp NOT NULL,
	finish_at timestamp NULL,
	"owner" varchar NOT NULL,
	responsible varchar NULL,
	id serial NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);


