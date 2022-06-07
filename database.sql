CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(1000),
	"description" varchar(256),
	"likes" int DEFAULT 0
);
--ALTER TABLE gallery ALTER likes SET DEFAULT 0;

-- // CRUD
INSERT INTO gallery (path, description) VALUES ('images/post_grad_summer_bbq.jpg', 'Following high school graduation, we had a big bbq celebration.');
SELECT * FROM gallery ORDER BY id ASC;
UPDATE gallery SET likes=likes+1 WHERE id=1;
INSERT INTO gallery (path, description) VALUES ('images/goat_small.JPG', 'Photo of a goat taken at Glacier National Park.');
INSERT INTO gallery (path, description) VALUES ('images/first_time_in_vegas.jpg', 'First time in Las Vegas for a birthday.');
