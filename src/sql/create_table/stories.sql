create table stories (
  id bigserial primary key,
  slug text not null,
  language text not null,
  title text not null,
  author text not null,
  content text not null,
  unique (slug, language)
);

insert into stories (slug, language, title, author, content) values
  ('tortoise-hare', 'en', 'The Tortoise and the Hare', 'Aesop', '...'),
  ('tortoise-hare', 'es', 'La liebre y la tortuga', 'Esopo', '...'),

  ('little-red-riding-hood', 'en', 'Little Red Riding Hood', 'Brothers Grimm', '...'),
  ('little-red-riding-hood', 'es', 'Caperucita Roja', 'Hermanos Grimm', '...'),

  ('three-little-pigs', 'en', 'The Three Little Pigs', 'Traditional', '...'),
  ('three-little-pigs', 'es', 'Los tres cerditos', 'Tradicional', '...'),

  ('goldilocks-three-bears', 'en', 'Goldilocks and the Three Bears', 'Robert Southey', '...'),
  ('goldilocks-three-bears', 'es', 'Ricitos de Oro y los tres osos', 'Robert Southey', '...'),

  ('jack-beanstalk', 'en', 'Jack and the Beanstalk', 'English Folk Tale', '...'),
  ('jack-beanstalk', 'es', 'Jack y las habichuelas mágicas', 'Cuento Popular Inglés', '...');
