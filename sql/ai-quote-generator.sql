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



-- Voice Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Valley girl');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'California surfer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Morgan Freeman');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Samuel L. Jackson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'The Rock');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gordon Ramsay');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Sean Connery');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Christopher Walken');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Yoda');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'The Joker');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'SpongeBob');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Kermit the Frog');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gollum');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Darth Vader');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Forrest Gump');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Borat');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Arnold Schwarzenegger');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Mr. T');



-- Topic Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Being married');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Coworkers at the office');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Work and productivity');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Health and Fitness');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Relationships and dating');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Education and learning');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Technology and social media');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Travel and adventure');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Money and finance');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Self-improvement and personal growth');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Politics and current events');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Pop culture and entertainment');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Hobbies and Interests');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Money and finance');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Self-improvement and personal growth');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Politics and current events');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Pop culture and entertainment');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Hobbies and Interests');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Food and Diet');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Parenting and Family');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'School and Education');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Love and Relationships');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Sports and Fitness');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Government');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Men');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Women');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'The pandemic');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Family Christmas vacation');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Thanksgiving holidays');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Halloween');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Mother''s Day');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Father''s Day');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Christmas');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'New Year''s Eve');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Graduation');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Wedding');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Baby Shower');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Retirement party');