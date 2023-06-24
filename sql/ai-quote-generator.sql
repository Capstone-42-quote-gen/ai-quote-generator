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

-- Voice Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Adam Sandler');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Al Pacino');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Arnold Schwarzenegger');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Austin Powers');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Bane');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Bill Clinton');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Borat');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Cartman');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Christopher Lloyd');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Christopher Walken');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Clint Eastwood');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Cowboy/Cowgirl');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Daffy Duck');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Danny DeVito');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'David Attenborough');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Darth Vader');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Drama Queen');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Dracula');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Drill Sergeant');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Dr. Evil');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Eddie Murphy');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Elmo');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Forrest Gump');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gandalf');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gollum');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gomer Pyle');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Hagrid');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Hipster');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Homer Simpson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Hulk Hogan');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Jack Sparrow');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'James Earl Jones');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Jeff Goldblum');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Jimmy Stewart');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Joe Biden');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'John Malkovich');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'John Travolta');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Kermit the Frog');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Liam Neeson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Leslie Knope');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Mad Scientist');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Michael Scott');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Millennials');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Mickey Mouse');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Morgan Freeman');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Mr. Bean');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Mr. T');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Napoleon Dynamite');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Nosy Neighbor');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Pee-wee Herman');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Peter Griffin');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Redneck');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Robin Williams');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Ron Swanson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Salesperson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Samuel L. Jackson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Sean Connery');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Self-Proclaimed Guru');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Shaggy');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Snobby Socialite');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'SpongeBob');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Stand-Up Comedian');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Steve Irwin');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Sylvester Stallone');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Tech Geek');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Tech Support');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Tommy Wiseau');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Tyrion Lannister');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Used Car Salesman');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Valley Girl');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Wine Connoisseur');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Yoga Instructor');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Yoda');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Hipster');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Lawyer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Soccer Mom');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Fitness Guru');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gamer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'California Surfer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Procrastinator');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Karate Sensei');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Drama Queen');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Fashionista');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Gamer');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Nosy Neighbor');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Self-Proclaimed Guru');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Stand-Up Comedian');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Wine Connoisseur');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Coupon Clipper');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Reality TV Star');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Organic Vegan');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Party Animal');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Psychic Medium');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Couch Potato');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Homer Simpson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Dr. Evil');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Leslie Knope');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Hagrid');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Conspiracy Theorist');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Salesperson');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'New Age Guru');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Cat Lady');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Tech Support');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Foodie');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'voice', 'Social Media Influencer');


-- Topic Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Aging and Getting older');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Animals and Pets');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Awkward Dating');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Awkward Encounters');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Bad Boss');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Being Married');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Career and Job dissatisfaction');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Celebrities and Pop Culture');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Coworkers at the Office');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Difficult Clients');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Education and School');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Everyday Absurdities');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Family Christmas Vacation');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Fashion Disasters');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Fitness and Health');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Food and Diet');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Government');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Hobbies and Interests');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Job Interviews');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Love and Relationships');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Meetings and Conference Calls');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Micromanagement');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Money and Finance');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Monday Blues');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'New Year''s resolutions');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Office Shenanigans');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Parenting Fails');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Parenting and Family');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Politics and Current Events');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Pop Culture and Entertainment');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Procrastination');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Relationship Quirks');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Relationships and Dating');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'School and Education');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Self-help and Personal Development');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Social Media Addiction');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Sports and Fitness');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Technology and Social media');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Technology Frustrations');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'The Pandemic');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Thanksgiving Holidays');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Travel and Adventure');
INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES (gen_random_uuid(), 'topic', 'Unproductive Meetings');

-- Template to add new topic if the topic value doesn't already exist in the DB --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value)
SELECT gen_random_uuid(), 'topic', 'Aging and Getting older'
WHERE NOT EXISTS (
    SELECT 1 FROM prompt WHERE prompt_type = 'topic' AND prompt_value = 'Aging and Getting older'
);


-- Update the prompt table to sort prompt_value alphabetically
UPDATE prompt AS p
SET prompt_value = sorted_values.prompt_value
FROM (
         SELECT prompt_id, prompt_type, prompt_value,
                ROW_NUMBER() OVER (PARTITION BY prompt_type ORDER BY prompt_value) AS row_num
         FROM prompt
     ) AS sorted_values
WHERE p.prompt_id = sorted_values.prompt_id;



-- Topic Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value)
SELECT gen_random_uuid(), 'topic', 'Procrastination'
WHERE NOT EXISTS (
    SELECT 1 FROM prompt WHERE prompt_type = 'topic' AND prompt_value = 'Procrastination'
);
INSERT INTO prompt (prompt_id, prompt_type, prompt_value)
SELECT gen_random_uuid(), 'topic', 'Being Married'
WHERE NOT EXISTS (
    SELECT 1 FROM prompt WHERE prompt_type = 'topic' AND prompt_value = 'Being Married'
);