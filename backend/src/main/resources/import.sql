INSERT INTO tb_client(name, company, email, phone, category, moment) VALUES ('Leonardo', 'XBSoftwares', 'leopassos.leite@gmail.com', '(51) 99154-6743', '30 dias', '2022-05-06T02:24:02Z');
INSERT INTO tb_client(name, company, email, phone, category, moment) VALUES ('Geromel', 'Grêmio', 'geromel@gmail.com', '(51) 99554-8743', '60 dias','2022-05-06T02:24:02Z');
INSERT INTO tb_client(name, company, email, phone, category, moment) VALUES ('Diego Souza', 'Grêmio', 'diegosouza@gmail.com', '(51) 98154-8991', '90 dias', '2022-05-06T02:24:02Z');
INSERT INTO tb_client(name, company, email, phone, category, moment) VALUES ('Cristiano Ronaldo', 'ManchesterUnited', 'CR7@gmail.com', '(51) 98454-6697', '30 dias', '2022-05-06T02:24:02Z');

INSERT INTO tb_category(name) VALUES ('30 dias');
INSERT INTO tb_category(name) VALUES ('60 dias');
INSERT INTO tb_category(name) VALUES ('90 dias');

INSERT INTO tb_client_category(client_id, category_id) VALUES (4,1);
INSERT INTO tb_client_category(client_id, category_id) VALUES (2,2);
INSERT INTO tb_client_category(client_id, category_id) VALUES (1,2);
INSERT INTO tb_client_category(client_id, category_id) VALUES (3,3);