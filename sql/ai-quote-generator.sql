DROP TABLE IF EXISTS post_prompt;
DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS prompt;
DROP TABLE IF EXISTS profile;

CREATE TABLE if not exists profile
(
    profile_id uuid NOT NULL PRIMARY KEY,
    profile_activation_token CHAR(32),
    profile_creation_time timestamptz NOT NULL,
    profile_email VARCHAR(128) NOT NULL unique,
    profile_hash CHAR(97) NOT NULL,
    profile_photo_url VARCHAR(256) NOT NULL,
    profile_username VARCHAR(64) NOT NULL unique
);

CREATE TABLE if not exists prompt
(
    prompt_id uuid NOT NULL PRIMARY KEY,
    prompt_type VARCHAR(128) NOT NULL,
    prompt_value VARCHAR(128) NOT NULL
);

CREATE TABLE if not exists post
(
    post_id uuid NOT NULL PRIMARY KEY,
    post_profile_id uuid NOT NULL,
    post_creation_time timestamptz NOT NULL,
    post_photo_url VARCHAR(2000) NOT NULL,
    post_quote VARCHAR(512) NOT NULL,
    post_photographer_name VARCHAR(128) NOT NULL,
    post_photographer_url VARCHAR(2000) NOT NULL,
    FOREIGN KEY (post_profile_id) REFERENCES profile(profile_id)
);

CREATE INDEX ON post(post_profile_id);

CREATE TABLE if not exists vote
(
    vote_post_id uuid NOT NULL,
    vote_profile_id uuid NOT NULL,
    vote_date timestamptz NOT NULL,
    FOREIGN KEY (vote_post_id) REFERENCES post(post_id),
    FOREIGN KEY (vote_profile_id) REFERENCES profile(profile_id)
);

CREATE INDEX ON vote(vote_post_id);
CREATE INDEX ON vote(vote_profile_id);

CREATE TABLE if not exists post_prompt
(
    post_prompt_post_id uuid NOT NULL,
    post_prompt_prompt_id uuid NOT NULL,
    FOREIGN KEY (post_prompt_post_id) REFERENCES post(post_id),
    FOREIGN KEY (post_prompt_prompt_id) REFERENCES prompt(prompt_id)
);

CREATE INDEX ON post_prompt(post_prompt_post_id);
CREATE INDEX ON post_prompt(post_prompt_prompt_id);


ALTER TABLE post
ADD COLUMN post_photographer_name VARCHAR(128),
ADD COLUMN post_photographer_url VARCHAR(2000),
ALTER COLUMN post_photo_url TYPE VARCHAR(2000);



INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Borat');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'hard work');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Arnold Schwarzanegger');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'procrastination');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Spongebob Squarepants');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'marriage and relationships');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'california surfer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'money and finance');