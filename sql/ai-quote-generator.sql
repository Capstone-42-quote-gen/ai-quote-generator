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
INSERT INTO prompt (prompt_id, prompt_type, prompt_value)
VALUES
    (gen_random_uuid(), 'voice', 'Adam Sandler'),
    (gen_random_uuid(), 'voice', 'Al Pacino'),
    (gen_random_uuid(), 'voice', 'Amelia Bedelia'),
    (gen_random_uuid(), 'voice', 'Arnold Schwarzenegger'),
    (gen_random_uuid(), 'voice', 'Austin Powers'),
    (gen_random_uuid(), 'voice', 'Bane'),
    (gen_random_uuid(), 'voice', 'Bill Clinton'),
    (gen_random_uuid(), 'voice', 'Borat'),
    (gen_random_uuid(), 'voice', 'California Surfer'),
    (gen_random_uuid(), 'voice', 'Cartman'),
    (gen_random_uuid(), 'voice', 'Cat woman'),
    (gen_random_uuid(), 'voice', 'Christopher Lloyd'),
    (gen_random_uuid(), 'voice', 'Christopher Walken'),
    (gen_random_uuid(), 'voice', 'Clint Eastwood'),
    (gen_random_uuid(), 'voice', 'Cowboy/Cowgirl'),
    (gen_random_uuid(), 'voice', 'Coupon Clipper'),
    (gen_random_uuid(), 'voice', 'Cowboy/Cowgirl'),
    (gen_random_uuid(), 'voice', 'Daffy Duck'),
    (gen_random_uuid(), 'voice', 'Danny DeVito'),
    (gen_random_uuid(), 'voice', 'Danerys Targaryen'),
    (gen_random_uuid(), 'voice', 'David Attenborough'),
    (gen_random_uuid(), 'voice', 'Delores Umbridge'),
    (gen_random_uuid(), 'voice', 'Dolly Parton'),
    (gen_random_uuid(), 'voice', 'Donald Trump'),
    (gen_random_uuid(), 'voice', 'Dora the Explorer'),
    (gen_random_uuid(), 'voice', 'Dorothy'),
    (gen_random_uuid(), 'voice', 'Dracula'),
    (gen_random_uuid(), 'voice', 'Drill Sergeant'),
    (gen_random_uuid(), 'voice', 'Drama Queen'),
    (gen_random_uuid(), 'voice', 'Daria'),
    (gen_random_uuid(), 'voice', 'Eddie Murphy'),
    (gen_random_uuid(), 'voice', 'Elsa'),
    (gen_random_uuid(), 'voice', 'Ellen Ripley'),
    (gen_random_uuid(), 'voice', 'Eleven'),
    (gen_random_uuid(), 'voice', 'Elle Woods'),
    (gen_random_uuid(), 'voice', 'Elmo'),
    (gen_random_uuid(), 'voice', 'Elvira'),
    (gen_random_uuid(), 'voice', 'Eowyn'),
    (gen_random_uuid(), 'voice', 'Fitness Guru'),
    (gen_random_uuid(), 'voice', 'Forrest Gump'),
    (gen_random_uuid(), 'voice', 'Gamer'),
    (gen_random_uuid(), 'voice', 'Gandalf'),
    (gen_random_uuid(), 'voice', 'Gollum'),
    (gen_random_uuid(), 'voice', 'Gilbert Gottfried'),
    (gen_random_uuid(), 'voice', 'Hulk Hogan'),
    (gen_random_uuid(), 'voice', 'Hipster'),
    (gen_random_uuid(), 'voice', 'James Earl Jones'),
    (gen_random_uuid(), 'voice', 'Jane Austen'),
    (gen_random_uuid(), 'voice', 'Jeff Goldblum'),
    (gen_random_uuid(), 'voice', 'Jimmy Stewart'),
    (gen_random_uuid(), 'voice', 'Joe Biden'),
    (gen_random_uuid(), 'voice', 'John Malkovich'),
    (gen_random_uuid(), 'voice', 'John Travolta'),
    (gen_random_uuid(), 'voice', 'Kermit the Frog'),
    (gen_random_uuid(), 'voice', 'Karate Sensei'),
    (gen_random_uuid(), 'voice', 'Lara Croft'),
    (gen_random_uuid(), 'voice', 'Leslie Knope'),
    (gen_random_uuid(), 'voice', 'Liam Neeson'),
    (gen_random_uuid(), 'voice', 'Lisa Simpson'),
    (gen_random_uuid(), 'voice', 'Mad Scientist'),
    (gen_random_uuid(), 'voice', 'Mary Poppins'),
    (gen_random_uuid(), 'voice', 'Matilda Wormwood'),
    (gen_random_uuid(), 'voice', 'Mickey Mouse'),
    (gen_random_uuid(), 'voice', 'Millennials'),
    (gen_random_uuid(), 'voice', 'Miranda Priestly'),
    (gen_random_uuid(), 'voice', 'Morgan Freeman'),
    (gen_random_uuid(), 'voice', 'Mr. Bean'),
    (gen_random_uuid(), 'voice', 'Mr. T'),
    (gen_random_uuid(), 'voice', 'Ms Frizzle'),
    (gen_random_uuid(), 'voice', 'Mulan'),
    (gen_random_uuid(), 'voice', 'Napoleon Dynamite'),
    (gen_random_uuid(), 'voice', 'Nosy Neighbor'),
    (gen_random_uuid(), 'voice', 'Organic Vegan'),
    (gen_random_uuid(), 'voice', 'Party Animal'),
    (gen_random_uuid(), 'voice', 'Pee-wee Herman'),
    (gen_random_uuid(), 'voice', 'Peter Griffin'),
    (gen_random_uuid(), 'voice', 'Princess Bubblegum'),
    (gen_random_uuid(), 'voice', 'Procrastinator'),
    (gen_random_uuid(), 'voice', 'Psychic Medium'),
    (gen_random_uuid(), 'voice', 'Redneck'),
    (gen_random_uuid(), 'voice', 'Regina George'),
    (gen_random_uuid(), 'voice', 'Reality TV Star'),
    (gen_random_uuid(), 'voice', 'Robin Williams'),
    (gen_random_uuid(), 'voice', 'Ron Swanson'),
    (gen_random_uuid(), 'voice', 'Samuel L. Jackson'),
    (gen_random_uuid(), 'voice', 'Sailor Moon'),
    (gen_random_uuid(), 'voice', 'Sandy Cheeks'),
    (gen_random_uuid(), 'voice', 'Sean Connery'),
    (gen_random_uuid(), 'voice', 'Self-Proclaimed Guru'),
    (gen_random_uuid(), 'voice', 'Shaggy'),
    (gen_random_uuid(), 'voice', 'SpongeBob'),
    (gen_random_uuid(), 'voice', 'Sylvester Stallone'),
    (gen_random_uuid(), 'voice', 'Snobby Socialite'),
    (gen_random_uuid(), 'voice', 'Stand-Up Comedian'),
    (gen_random_uuid(), 'voice', 'Steve Irwin'),
    (gen_random_uuid(), 'voice', 'Tech Geek'),
    (gen_random_uuid(), 'voice', 'The Joker'),
    (gen_random_uuid(), 'voice', 'The Queen of England'),
    (gen_random_uuid(), 'voice', 'Tommy Wiseau'),
    (gen_random_uuid(), 'voice', 'Valley Girl'),
    (gen_random_uuid(), 'voice', 'Velma Dinkley'),
    (gen_random_uuid(), 'voice', 'Wine Connoisseur'),
    (gen_random_uuid(), 'voice', 'Wonder Woman'),
    (gen_random_uuid(), 'voice', 'Yoga Instructor'),
    (gen_random_uuid(), 'voice', 'Yoda'),
    (gen_random_uuid(), 'voice', 'Wednesday Addams'),
    (gen_random_uuid(), 'voice', 'The Queen of England'),
    (gen_random_uuid(), 'voice', 'Sandy Cheeks'),
    (gen_random_uuid(), 'voice', 'Delores Umbridge'),
    (gen_random_uuid(), 'voice', 'Dolly Parton'),
    (gen_random_uuid(), 'voice', 'Audrey Hepburn'),
    (gen_random_uuid(), 'voice', 'Ellen Ripley'),
    (gen_random_uuid(), 'voice', 'Danerys Targaryen'),
    (gen_random_uuid(), 'voice', 'Eleven'),
    (gen_random_uuid(), 'voice', 'Elvira'),
    (gen_random_uuid(), 'voice', 'Mary Poppins'),
    (gen_random_uuid(), 'voice', 'Miranda Priestly'),
    (gen_random_uuid(), 'voice', 'Lara Croft'),
    (gen_random_uuid(), 'voice', 'Mulan'),
    (gen_random_uuid(), 'voice', 'Regina George'),
    (gen_random_uuid(), 'voice', 'Matilda Wormwood'),
    (gen_random_uuid(), 'voice', 'Eowyn'),
    (gen_random_uuid(), 'voice', 'Elle Woods'),
    (gen_random_uuid(), 'voice', 'Sailor Moon'),
    (gen_random_uuid(), 'voice', 'Jane Austen'),
    (gen_random_uuid(), 'voice', 'Zooey Deschanel'),
    (gen_random_uuid(), 'voice', 'Doja Cat'),
    (gen_random_uuid(), 'voice', 'Lisa Simpson'),
    (gen_random_uuid(), 'voice', 'Dorothy'),
    (gen_random_uuid(), 'voice', 'Amelia Bedelia'),
    (gen_random_uuid(), 'voice', 'Dora the Explorer'),
    (gen_random_uuid(), 'voice', 'Velma Dinkley'),
    (gen_random_uuid(), 'voice', 'Elsa'),
    (gen_random_uuid(), 'voice', 'Wonder Woman'),
    (gen_random_uuid(), 'voice', 'Princess Bubblegum'),
    (gen_random_uuid(), 'voice', 'Ms Frizzle'),
    (gen_random_uuid(), 'voice', 'Daria'),
    (gen_random_uuid(), 'voice', 'Cat woman'),
    (gen_random_uuid(), 'voice', 'God');




-- Topic Statements --
INSERT INTO prompt (prompt_id, prompt_type, prompt_value)
VALUES
    (gen_random_uuid(), 'topic', 'Aging and Getting older'),
    (gen_random_uuid(), 'topic', 'Being Married'),
    (gen_random_uuid(), 'topic', 'Career and Job dissatisfaction'),
    (gen_random_uuid(), 'topic', 'Celebrities and Pop Culture'),
    (gen_random_uuid(), 'topic', 'Coworkers at the Office'),
    (gen_random_uuid(), 'topic', 'Education and School'),
    (gen_random_uuid(), 'topic', 'Family Christmas Vacation'),
    (gen_random_uuid(), 'topic', 'Food and Diet'),
    (gen_random_uuid(), 'topic', 'Goal Setting'),
    (gen_random_uuid(), 'topic', 'Government'),
    (gen_random_uuid(), 'topic', 'Health and Fitness'),
    (gen_random_uuid(), 'topic', 'Hobbies and Interests'),
    (gen_random_uuid(), 'topic', 'Love and Relationships'),
    (gen_random_uuid(), 'topic', 'Meetings and Conference Calls'),
    (gen_random_uuid(), 'topic', 'Money and Finance'),
    (gen_random_uuid(), 'topic', 'New Year''s resolutions'),
    (gen_random_uuid(), 'topic', 'Parenting and Family'),
    (gen_random_uuid(), 'topic', 'Politics and Current Events'),
    (gen_random_uuid(), 'topic', 'Pop Culture and Entertainment'),
    (gen_random_uuid(), 'topic', 'Procrastination'),
    (gen_random_uuid(), 'topic', 'Relationships and Dating'),
    (gen_random_uuid(), 'topic', 'School and Education'),
    (gen_random_uuid(), 'topic', 'Self-help and Personal Development'),
    (gen_random_uuid(), 'topic', 'Social Media Addiction'),
    (gen_random_uuid(), 'topic', 'Sports and Fitness'),
    (gen_random_uuid(), 'topic', 'Technology and Social media'),
    (gen_random_uuid(), 'topic', 'Thanksgiving Holidays'),
    (gen_random_uuid(), 'topic', 'The Pandemic'),
    (gen_random_uuid(), 'topic', 'Travel and Adventure'),
    (gen_random_uuid(), 'topic', 'Work and Productivity');

INSERT INTO prompt (prompt_id, prompt_type, prompt_value) VALUES
(gen_random_uuid(), 'topic', 'Emails'),
  (gen_random_uuid(), 'topic', 'Job Hunting'),
  (gen_random_uuid(), 'topic', 'Bosses'),
  (gen_random_uuid(), 'topic', 'Coffee'),
  (gen_random_uuid(), 'topic', 'Office Politics');


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


