// main.js

const translations = {
  'pt-br': {
    'nav-inicio': 'Início', 'nav-sobre': 'Sobre Nós', 'nav-para-quem': 'Para Quem', 'nav-futuro': 'Futuro', 'nav-faq': 'FAQ', 'nav-contato': 'Contato',
    'hero-h1': 'Empatia, Tecnologia e <br class="hidden xl:block"><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Imaginação no Cuidado</span>',
    'hero-p': 'Uma nova forma de cuidar. Um novo jeito de educar. O bem-estar emocional mudando a jornada hospitalar, apoiado por games e interatividade.',
    'hero-btn': 'Junte-se a nós',
    'sala-tag': 'Exploração 3D',
    'sala-h2': 'A Sala <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Pirata das Estrelas</span>', 
    'sala-p': 'Transforma o ambiente do tratamento em uma jornada incrível de descobertas e esperança. Cada elemento da sala foi planejado para reduzir o impacto emocional na criança através de imersão e jogos 3D interativos.',
    'sala-f1-t': 'Ilha Central', 'sala-f1-p': 'Árvores mágicas e pufes interativos para descanso absoluto.',
    'sala-f2-t': 'Quarto do Jack', 'sala-f2-p': 'Elementos escaláveis inspirados no próprio jogo digital.',
    'sala-f3-t': 'Observatório', 'sala-f3-p': 'Telescópio e lousa imersiva para expressar descobertas pelo espaço.',
    'sala-f4-t': 'Caminho & Baú', 'sala-f4-p': 'Um trajeto físico rumo às mensagens de esperança digitais.',
    'sobre-h1': 'Humanizamos o tratamento infantil com tecnologia, educação e amor.',
    'sobre-story-title': 'Nossa História',
    'sobre-story-1': 'A MedAffection nasceu do encontro entre profissionais da saúde, educadores e criativos. O primeiro passo foi a criação de HQs educativas.',
    'sobre-story-2': 'Evoluímos para o desenvolvimento do jogo Pirata das Estrelas, que inspirou a sala.',
    'sobre-cb1-t': 'HQs Originais', 'sobre-cb1-p': 'Explicam exames e sintomas.',
    'sobre-cb2-t': 'Jogo Digital', 'sobre-cb2-p': 'Trouxe interatividade.',
    'sobre-cb3-t': 'Sala Temática', 'sobre-cb3-p': 'Espaço imersivo no hospital.',
    'sobre-timeline': 'Linha do Tempo',
    'timeline-1-t': 'Ideia & HQs', 'timeline-1-p': 'Primeiras histórias.',
    'timeline-2-t': 'Protótipo', 'timeline-2-p': 'Primeiro jogo mobile.',
    'timeline-3-t': 'Piloto', 'timeline-3-p': 'Testes no hospital.',
    'timeline-4-t': 'Conceito da Sala', 'timeline-4-p': 'Arquitetos e designers criam a Sala.',
    'timeline-5-t': 'Entrega', 'timeline-5-p': 'Início do atendimento no espaço físico.',
    'sobre-valores': 'Nossos Valores',
    'val-1-t': 'Empatia', 'val-1-p': 'Acolhemos as crianças e famílias.',
    'val-2-t': 'Educação', 'val-2-p': 'Aprendizado acessível.',
    'val-3-t': 'Cuidados', 'val-3-p': 'Segurança e melhores práticas.',
    'val-4-t': 'Amor', 'val-4-p': 'Criando ambientes de afeto.',
    'val-5-t': 'Dedicação', 'val-5-p': 'Melhorar nosso impacto.',
    'sobre-cta-t': 'Quer saber mais ou apoiar?',
    'sobre-cta-p': 'Entre em contato e vamos construir essa história juntos.',
    'sobre-cta-b': 'Fale com a gente',

    // New Sections
    'jogo-h2': 'O Jogo - <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Pirata das Estrelas</span>',
    'jogo-p1': 'Nascido de nossas histórias em quadrinhos, Pirata das Estrelas ajuda as crianças a compreenderem sua jornada: sintomas, exames e procedimentos ganham significado através de aventuras e mini-games.',
    'jogo-p2': 'Desenvolvido com apoio de profissionais da saúde, o jogo usa linguagem acessível e personagens carismáticos para transformar medo em conhecimento e coragem.',
    'jogo-p3': 'Disponível em tablets e consoles portáteis, ele é o coração da experiência dentro da sala.',
    
    'pq-h2': 'Para quem é o projeto',
    'pq-p': 'Impactamos três públicos com um único propósito: cuidar com amor.',
    'pq-c1-t': 'Hospitais Pediátricos',
    'pq-c1-p': 'Instituições que desejam inovar no cuidado humanizado e oferecer uma experiência transformadora às crianças.',
    'pq-c2-t': 'Investidores e Marcas',
    'pq-c2-p': 'Organizações e pessoas que querem associar sua marca a um impacto social real e duradouro.',
    'pq-c3-t': 'Famílias & Profissionais',
    'pq-c3-p': 'Quem acredita que o bem-estar emocional é parte essencial da jornada de cura.',
    
    'fut-h2': 'O futuro que já começou',
    'fut-p1': 'Estamos construindo a primeira Sala Pirata das Estrelas. Nossa visão é que, em breve, crianças em todo o Brasil — e além — encontrem espaços como este nos hospitais.',
    'fut-p2': 'Espaços vivos, educativos e acolhedores que transformam lágrimas em sorrisos, medo em conhecimento e dor em momentos de conexão.',
    'fut-p3': 'Essa é a revolução MedAffection. E ela já começou.',
    
    'faq-h2': 'Perguntas Frequentes',
    'faq-q1': 'Como funciona o modelo de patrocínio?', 'faq-a1': 'Você pode investir diretamente em uma sala (com visibilidade de marca) ou apoiar de forma filantrópica e anônima.',
    'faq-q2': 'Quanto tempo leva a instalação?', 'faq-a2': 'Após firmarmos a parceria, a entrega acontece em aproximadamente 90 dias.',
    'faq-q3': 'Quais hospitais podem participar?', 'faq-a3': 'Hospitais pediátricos oncológicos, públicos ou privados, que disponham de um espaço para a implementação.',
    'faq-q4': 'Quais são os benefícios corporativos?', 'faq-a4': 'Reconhecimento institucional, presença nos materiais da sala e associação a um propósito social genuíno.',
    'faq-q5': 'O projeto tem apoio profissional?', 'faq-a5': 'Sim. Contamos com profissionais da saúde, psicólogos e especialistas em oncologia pediátrica. Atuamos via incentivos e políticas públicas.',
    
    'cont-h2': 'Seja parte da revolução MedAffection',
    'cont-p': 'Escolha como deseja se conectar com nosso projeto e vamos conversar.',
    'cont-b1': 'Quero patrocinar uma sala',
    'cont-b2': 'Quero para meu hospital',
    'cont-f1-t': 'Quero patrocinar uma sala',
    'cont-f2-t': 'Sou de um hospital e quero saber mais',
    
    'val-btn-enviar': 'Enviar Mensagem',
    'pl-nome': 'Nome completo', 'pl-email': 'E-mail', 'pl-tel': 'Telefone', 'pl-emp': 'Empresa (opcional)', 'pl-msg': 'Mensagem', 'pl-hosp': 'Nome do hospital',
    'captcha-help': 'Resolva para provar que é humano.',
    'captcha-err': 'Captcha incorreto. Tente novamente!',
    
    'foot-desc': 'Transformando o tratamento do câncer infantil com empatia, tecnologia e imaginação.',
    'foot-links': 'Links rápidos',
    'foot-rights': 'Todos os direitos reservados.',

    // Support Section
    'supp-h2': 'Apoie o Projeto',
    'supp-p': 'Ajude-nos a levar a Sala Pirata das Estrelas para mais hospitais em todo o Brasil. Você pode contribuir via PIX ou através do incentivo fiscal da Lei Rouanet.',
    
    'supp-pix-t': 'Doação via PIX',
    'supp-pix-p': 'Contribua de forma rápida e direta para a manutenção e expansão de nossas atividades.',
    'supp-pix-key': '52.911.460/0001-75',
    'supp-pix-btn': 'Copiar Chave PIX',

    'supp-rouanet-t': 'Incentivo Fiscal (Lei de Incentivo à Cultura)',
    'supp-rouanet-p': 'Direcione parte do seu Imposto de Renda para o nosso projeto cultural. Válido apenas para o Brasil.',
    'supp-rouanet-corp-t': 'Para Empresas',
    'supp-rouanet-corp-p': 'Dedução de até 4% do IR devido (Lucro Real).',
    'supp-rouanet-indiv-t': 'Para Pessoas Físicas',
    'supp-rouanet-indiv-p': 'Dedução de até 6% do IR devido (Declaração Completa).',
    
    'supp-bank-t': 'Dados do Projeto',
    'supp-bank-banco': 'Banco',
    'supp-bank-agen': 'Agência',
    'supp-bank-conta': 'Conta',
    'supp-bank-pronac': 'PRONAC',
    'supp-bank-portaria': 'Portaria',
    'supp-bank-valor': 'Valor Aprovado',
    'supp-bank-dou-btn': 'Acessar no Portal Versalic',
    'supp-bank-art18': 'Projeto enquadrado no Artigo 18',
    'supp-bank-deducao': 'Dedução de 100% do imposto de renda',
    
    'supp-brazil-only': '* Este incentivo fiscal aplica-se exclusivamente a contribuintes no Brasil.'
  },
  'pt-pt': {
    'nav-inicio': 'Início', 'nav-sobre': 'Sobre Nós', 'nav-para-quem': 'Para Quem', 'nav-futuro': 'Futuro', 'nav-faq': 'FAQ', 'nav-contato': 'Contacto',
    'hero-h1': 'Empatia, Tecnologia e <br class="hidden xl:block"><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Imaginação no Cuidado</span>',
    'hero-p': 'Uma nova forma de cuidar. Um novo modo de educar. O bem-estar emocional a mudar a jornada hospitalar, apoiado por videojogos e interatividade.',
    'hero-btn': 'Junte-se a nós',
    'sala-tag': 'Exploração 3D',
    'sala-h2': 'A Sala <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Pirata das Estrelas</span>', 
    'sala-p': 'Transforma o ambiente de tratamento numa viagem incrível de descobertas e esperança. Cada elemento da sala foi desenhado para reduzir o impacto emocional na criança.',
    'sala-f1-t': 'Ilha Central', 'sala-f1-p': 'Árvores mágicas e pufes interativos para descanso absoluto.',
    'sala-f2-t': 'Quarto do Jack', 'sala-f2-p': 'Elementos de escalada inspirados no próprio videojogo.',
    'sala-f3-t': 'Observatório', 'sala-f3-p': 'Telescópio e ardósia imersiva para expressar descobertas pelo espaço.',
    'sala-f4-t': 'Caminho & Baú', 'sala-f4-p': 'Um trajeto físico rumo a mensagens digitais de esperança.',
    'sobre-h1': 'Humanizamos o tratamento infantil com tecnologia, educação e amor.',
    'sobre-story-title': 'A Nossa História',
    'sobre-story-1': 'A MedAffection nasceu do encontro entre profissionais da saúde, educadores e criativos. O primeiro passo foi a criação de BDs.',
    'sobre-story-2': 'Evoluímos para o desenvolvimento do videojogo Pirata das Estrelas.',
    'sobre-cb1-t': 'BDs Originais', 'sobre-cb1-p': 'Explicam exames e sintomas.',
    'sobre-cb2-t': 'O Videojogo', 'sobre-cb2-p': 'Trouxe interatividade.',
    'sobre-cb3-t': 'A Sala Temática', 'sobre-cb3-p': 'Espaço imersivo.',
    'sobre-timeline': 'Linha do Tempo',
    'timeline-1-t': 'Ideia & BDs', 'timeline-1-p': 'Criação das primeiras histórias.',
    'timeline-2-t': 'Protótipo', 'timeline-2-p': 'Primeiro jogo mobile.',
    'timeline-3-t': 'Piloto', 'timeline-3-p': 'Testes no hospital.',
    'timeline-4-t': 'Conceito da Sala', 'timeline-4-p': 'Arquitetos desenham o espaço.',
    'timeline-5-t': 'Entrega', 'timeline-5-p': 'Instalação concluída no hospital.',
    'sobre-valores': 'Os Nossos Valores',
    'val-1-t': 'Empatia', 'val-1-p': 'Acolhemos as crianças.',
    'val-2-t': 'Educação', 'val-2-p': 'Aprendizagem acessível.',
    'val-3-t': 'Cuidados', 'val-3-p': 'Segurança e práticas seguras.',
    'val-4-t': 'Amor', 'val-4-p': 'Criar ambientes de afeto.',
    'val-5-t': 'Dedicação', 'val-5-p': 'Compromisso em melhorar.',
    'sobre-cta-t': 'Quer saber mais ou apoiar?',
    'sobre-cta-p': 'Entre em contacto e vamos construir esta história juntos.',
    'sobre-cta-b': 'Fale connosco',
    
    // New Sections
    'jogo-h2': 'O Videojogo - <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Pirata das Estrelas</span>',
    'jogo-p1': 'Nascido das nossas bandas desenhadas, Pirata das Estrelas ajuda as crianças a compreenderem a sua jornada: sintomas e procedimentos ganham significado através de aventuras.',
    'jogo-p2': 'Desenvolvido com apoio de profissionais da saúde, o jogo usa linguagem acessível e personagens carismáticos.',
    'jogo-p3': 'Disponível em tablets e consolas, é o coração da experiência na sala.',
    
    'pq-h2': 'Para quem é o projeto',
    'pq-p': 'Impactamos três públicos com um único propósito: cuidar com amor.',
    'pq-c1-t': 'Hospitais Pediátricos',
    'pq-c1-p': 'Instituições que desejam inovar no cuidado humanizado e oferecer uma experiência transformadora.',
    'pq-c2-t': 'Investidores e Marcas',
    'pq-c2-p': 'Organizações e pessoas que querem associar a sua marca a um impacto social real.',
    'pq-c3-t': 'Famílias & Profissionais',
    'pq-c3-p': 'Quem acredita que o bem-estar emocional faz parte da jornada de cura.',
    
    'fut-h2': 'O futuro que já começou',
    'fut-p1': 'Estamos a construir a primeira Sala Pirata das Estrelas. A nossa visão é que, em breve, crianças em todo o país encontrem espaços como este nos hospitais.',
    'fut-p2': 'Espaços vivos, educativos e acolhedores que transformam lágrimas em sorrisos e dor em momentos de ligação.',
    'fut-p3': 'Esta é a revolução MedAffection. E já começou.',
    
    'faq-h2': 'Perguntas Frequentes',
    'faq-q1': 'Como funciona o modelo de patrocínio?', 'faq-a1': 'Pode investir diretamente numa sala ou apoiar de forma filantrópica e anónima.',
    'faq-q2': 'Quanto tempo demora a instalação?', 'faq-a2': 'Após firmarmos a parceria, a entrega acontece em aproximadamente 90 dias.',
    'faq-q3': 'Quais hospitais podem participar?', 'faq-a3': 'Hospitais pediátricos oncológicos que disponham de um espaço para a implementação.',
    'faq-q4': 'Quais são os benefícios corporativos?', 'faq-a4': 'Reconhecimento institucional e associação a um propósito genuíno.',
    'faq-q5': 'O projeto tem apoio profissional?', 'faq-a5': 'Sim. Contamos com equipas especializadas em oncologia pediátrica e profissionais de saúde.',
    
    'cont-h2': 'Faça parte da revolução MedAffection',
    'cont-p': 'Escolha como deseja conectar-se com o nosso projeto e vamos conversar.',
    'cont-b1': 'Quero patrocinar uma sala',
    'cont-b2': 'Quero levar esta sala para o meu hospital',
    'cont-f1-t': 'Quero patrocinar uma sala',
    'cont-f2-t': 'Sou de um hospital e quero saber mais',
    
    'val-btn-enviar': 'Enviar Mensagem',
    'pl-nome': 'Nome completo', 'pl-email': 'E-mail', 'pl-tel': 'Telemóvel', 'pl-emp': 'Empresa / Entidade', 'pl-msg': 'Escreva aqui a sua mensagem', 'pl-hosp': 'Nome do hospital',
    'captcha-help': 'Resolva para provar que é humano.',
    'captcha-err': 'Captcha incorreto. Tente novamente!',
    
    'foot-desc': 'Transformando o tratamento do cancro infantil com empatia, tecnologia e imaginação.',
    'foot-links': 'Links rápidos',
    'foot-rights': 'Todos os direitos reservados.',

    // Support Section
    'supp-h2': 'Apoie o Projeto',
    'supp-p': 'Ajude-nos a levar a Sala Pirata das Estrelas para mais hospitais. No Brasil, pode contribuir através da Lei Rouanet.',
    
    'supp-pix-t': 'Doação Direta',
    'supp-pix-p': 'Contribua para a manutenção e expansão das nossas atividades.',
    'supp-pix-key': '52.911.460/0001-75',
    'supp-pix-btn': 'Copiar Chave PIX',

    'supp-rouanet-t': 'Incentivo Fiscal (Brasil)',
    'supp-rouanet-p': 'Mecanismo exclusivo para contribuintes brasileiros (Lei Rouanet).',
    'supp-rouanet-corp-t': 'Empresas (BR)',
    'supp-rouanet-corp-p': 'Dedução de até 4% do IR (Lucro Real).',
    'supp-rouanet-indiv-t': 'Particulares (BR)',
    'supp-rouanet-indiv-p': 'Dedução de até 6% do IR (Declaração Completa).',
    
    'supp-bank-t': 'Dados Bancários (PRONAC Brasil)',
    'supp-bank-banco': 'Banco: Banco do Brasil - 001',
    'supp-bank-agen': 'Agência: 2814-2',
    'supp-bank-conta': 'Conta: 69.464-9',
    'supp-bank-pronac': 'PRONAC: 260346',
    'supp-bank-portaria': 'Portaria: SEFIC/MINC Nº 96, 20/02/26',
    
    'supp-brazil-only': '* Mecanismo disponível apenas para o Brasil.'
  },
  'en-us': {
    'nav-inicio': 'Home', 'nav-sobre': 'About Us', 'nav-para-quem': 'For Whom', 'nav-futuro': 'Future', 'nav-faq': 'FAQ', 'nav-contato': 'Contact',
    'hero-h1': 'Empathy, Technology and <br class="hidden xl:block"><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Imagination in Care</span>',
    'hero-p': 'A new way to care. A new way to educate. Emotional well-being changing the hospital journey, supported by games and interactivity.',
    'hero-btn': 'Join us',
    'sala-tag': '3D Exploration',
    'sala-h2': 'The <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Star Pirate</span> Room', 
    'sala-p': 'Transforms the treatment environment into an incredible journey of discoveries and hope. Every element of the room is designed to reduce emotional impact through immersive 3D interactive gameplay.',
    'sala-f1-t': 'Central Island', 'sala-f1-p': 'Magical trees and interactive bean bags for absolute rest.',
    'sala-f2-t': 'Jack`s Room', 'sala-f2-p': 'Climbing elements inspired by the digital game itself.',
    'sala-f3-t': 'Observatory', 'sala-f3-p': 'Telescope and immersive chalkboard to express space discoveries.',
    'sala-f4-t': 'Path & Chest', 'sala-f4-p': 'A physical path leading to digital messages of hope.',
    'sobre-h1': 'We humanize pediatric cancer care with technology, education, and love.',
    'sobre-story-title': 'Our Story',
    'sobre-story-1': 'MedAffection was truly born from the meeting of health professionals, educators and creatives.',
    'sobre-story-2': 'We evolved to develop the Star Pirate game. From it emerged the concept of the themed room.',
    'sobre-cb1-t': 'Original Comics', 'sobre-cb1-p': 'Explains exams and symptoms.',
    'sobre-cb2-t': 'The Digital Game', 'sobre-cb2-p': 'Brought interactivity.',
    'sobre-cb3-t': 'Themed Room', 'sobre-cb3-p': 'Immersive hospital space.',
    'sobre-timeline': 'Timeline',
    'timeline-1-t': 'Idea & Comics', 'timeline-1-p': 'Creation of the first stories.',
    'timeline-2-t': 'Game Prototype', 'timeline-2-p': 'First mobile game.',
    'timeline-3-t': 'Hospital Pilot', 'timeline-3-p': 'Tests with children and teams.',
    'timeline-4-t': 'Room Concept', 'timeline-4-p': 'Architects design the Room.',
    'timeline-5-t': 'Delivery', 'timeline-5-p': 'Installation completed in the hospital.',
    'sobre-valores': 'Our Values',
    'val-1-t': 'Empathy', 'val-1-p': 'We listen to children and families.',
    'val-2-t': 'Education', 'val-2-p': 'Accessible medical learning.',
    'val-3-t': 'Care', 'val-3-p': 'Safe medical practices.',
    'val-4-t': 'Love', 'val-4-p': 'Creating environments full of affection.',
    'val-5-t': 'Dedication', 'val-5-p': 'Constant commitment to health.',
    'sobre-cta-t': 'Want to know more or support us?',
    'sobre-cta-p': 'Get in touch and let\'s build this story together.',
    'sobre-cta-b': 'Talk to us',
    
    // New Sections
    'jogo-h2': 'The Game - <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-coral">Star Pirate</span>',
    'jogo-p1': 'Born from our comic books, Star Pirate helps children understand their journey: symptoms and procedures gain meaning through adventures.',
    'jogo-p2': 'Developed with the support of health professionals, the game uses accessible language and charismatic characters to transform fear into courage.',
    'jogo-p3': 'Available on tablets and portable consoles, it is the heart of the experience inside the room.',
    
    'pq-h2': 'Who is it for',
    'pq-p': 'We impact three audiences with a single purpose: to care with love.',
    'pq-c1-t': 'Pediatric Hospitals',
    'pq-c1-p': 'Institutions wishing to innovate in humanized care and offer a transformative experience to children.',
    'pq-c2-t': 'Investors and Brands',
    'pq-c2-p': 'Organizations and people who want to associate their brand with a real social impact.',
    'pq-c3-t': 'Families & Professionals',
    'pq-c3-p': 'Anyone who believes that emotional well-being is an essential part of the healing journey.',
    
    'fut-h2': 'The future has begun',
    'fut-p1': 'We are building the first Star Pirate Room. Our vision is that soon, children everywhere will find spaces like this in hospitals.',
    'fut-p2': 'Living, educational and welcoming spaces that transform tears into smiles, fear into knowledge and pain into moments of connection.',
    'fut-p3': 'This is the MedAffection revolution. And it has already started.',
    
    'faq-h2': 'Frequently Asked Questions',
    'faq-q1': 'How does the sponsorship model work?', 'faq-a1': 'You can invest directly in a room (with brand visibility) or support philanthropically and anonymously.',
    'faq-q2': 'How long does installation take?', 'faq-a2': 'Once the partnership is signed, delivery takes approximately 90 days.',
    'faq-q3': 'Which hospitals can participate?', 'faq-a3': 'Pediatric oncology hospitals, public or private, that have a space available for implementation.',
    'faq-q4': 'What are the corporate benefits?', 'faq-a4': 'Institutional recognition and association with a genuine social purpose.',
    'faq-q5': 'Does the project have professional support?', 'faq-a5': 'Yes. We rely on healthcare professionals, psychologists, and specialists in pediatric oncology.',
    
    'cont-h2': 'Be part of the MedAffection revolution',
    'cont-p': 'Choose how you want to connect with our project and let’s talk.',
    'cont-b1': 'I want to sponsor a room',
    'cont-b2': 'I want this room for my hospital',
    'cont-f1-t': 'I want to sponsor a room',
    'cont-f2-t': 'I represent a hospital and want to know more',
    
    'val-btn-enviar': 'Send Message',
    'pl-nome': 'Full Name', 'pl-email': 'E-mail', 'pl-tel': 'Phone', 'pl-emp': 'Company (optional)', 'pl-msg': 'Message', 'pl-hosp': 'Hospital Name',
    'captcha-help': 'Solve this to prove you are human.',
    'captcha-err': 'Incorrect Captcha. Please try again!',
    
    'foot-desc': 'Transforming pediatric cancer care with empathy, technology and imagination.',
    'foot-links': 'Quick Links',
    'foot-rights': 'All rights reserved.',

    // Support Section
    'supp-h2': 'Support the Project',
    'supp-p': 'Help us bring the Star Pirate Room to more hospitals. In Brazil, you can contribute using the Lei Rouanet tax incentive.',
    
    'supp-pix-t': 'Direct Donation',
    'supp-pix-p': 'Contribute directly to the maintenance and expansion of our activities.',
    'supp-pix-key': '52.911.460/0001-75',
    'supp-pix-btn': 'Copy PIX Key',

    'supp-rouanet-t': 'Fiscal Incentive (Cultural Incentive Law)',
    'supp-rouanet-p': 'Redirect part of your Income Tax to our cultural project. Valid only for Brazil.',
    'supp-rouanet-corp-t': 'For Companies',
    'supp-rouanet-corp-p': 'Deduction of up to 4% of Income Tax (Real Profit).',
    'supp-rouanet-indiv-t': 'For Individuals',
    'supp-rouanet-indiv-p': 'Deduction of up to 6% of Income Tax (Complete Declaration).',
    
    'supp-bank-t': 'Project Details',
    'supp-bank-banco': 'Bank',
    'supp-bank-agen': 'Agency',
    'supp-bank-conta': 'Account',
    'supp-bank-pronac': 'PRONAC',
    'supp-bank-portaria': 'Decree',
    'supp-bank-valor': 'Approved Value',
    'supp-bank-dou-btn': 'Consult on Versalic Portal',
    'supp-bank-art18': 'Project under Article 18',
    'supp-bank-deducao': '100% Tax Deduction',
    'supp-brazil-only': '* This fiscal incentive applies exclusively to taxpayers in Brazil.'
  }
};

window.changeLanguage = function(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const inputs = ['fi-nome', 'fi-email', 'fi-tel', 'fi-emp', 'fi-msg', 'fh-nome', 'fh-email', 'fh-tel', 'fh-hosp', 'fh-msg'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    const translationKey = "pl-" + id.split('-')[1]; // Maps "fi-nome" to "pl-nome"
    if (el && translations[lang] && translations[lang][translationKey]) {
      el.placeholder = translations[lang][translationKey];
    }
  });

  document.querySelectorAll('[data-i18n-btn]').forEach(btn => {
    const key = btn.getAttribute('data-i18n-btn');
    if (translations[lang] && translations[lang][key]) {
      btn.innerText = translations[lang][key];
    }
  });
  
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.remove('bg-brand-purple/5', 'text-brand-purple');
    btn.classList.add('text-gray-600');
    const check = btn.querySelector('.ph-check');
    if(check) check.remove();
  });
  
  const activeBtn = document.querySelector(`[data-lang-btn="${lang}"]`);
  if(activeBtn) {
    activeBtn.classList.add('bg-brand-purple/5', 'text-brand-purple');
    activeBtn.classList.remove('text-gray-600');
    if(!activeBtn.querySelector('.ph-check')) {
      activeBtn.insertAdjacentHTML('beforeend', '<i class="ph-bold ph-check ml-auto text-brand-purple text-xs"></i>');
    }
    const mainLangText = document.getElementById('current-lang-text');
    const mainLangIcon = document.getElementById('current-lang-icon');
    if(mainLangText) mainLangText.innerText = activeBtn.getAttribute('data-lang-label');
    if(mainLangIcon) mainLangIcon.src = activeBtn.getAttribute('data-lang-flag');
  }
};

window.selectForm = function(tipo) {
  const invForm = document.getElementById('investidor-form');
  const hosForm = document.getElementById('hospital-form');
  const btnInv = document.getElementById('btn-select-investidor');
  const btnHos = document.getElementById('btn-select-hospital');
  
  if(invForm && hosForm && btnInv && btnHos) {
    if(tipo === 'investidor') {
      invForm.classList.remove('hidden');
      hosForm.classList.add('hidden');
      
      btnInv.className = "bg-brand-purple text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md";
      btnHos.className = "bg-transparent hover:bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm px-8 py-3 rounded-xl font-bold transition-all";
    } else {
      hosForm.classList.remove('hidden');
      invForm.classList.add('hidden');
      
      btnHos.className = "bg-brand-purple text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md";
      btnInv.className = "bg-transparent hover:bg-white text-gray-500 hover:text-gray-900 hover:shadow-sm px-8 py-3 rounded-xl font-bold transition-all";
    }
  }
};

let captchaValues = { inv: 0, hos: 0 };

window.generateCaptcha = function(tipo) {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const prefix = tipo === 'investidor' ? 'inv' : 'hos';
  const el = document.getElementById(`captcha-${prefix}-question`);
  const input = document.getElementById(`captcha-${prefix}-answer`);
  if (el) {
    el.innerText = `${num1} + ${num2}`;
    captchaValues[prefix] = num1 + num2;
    if (input) input.value = '';
  }
};

window.handleFormSubmit = function(event, tipo) {
  event.preventDefault();
  
  const prefix = tipo === 'Investidor' ? 'inv' : 'hos';
  const answer = parseInt(document.getElementById(`captcha-${prefix}-answer`).value, 10);
  const currentLang = document.getElementById('current-lang-text') ? document.getElementById('current-lang-text').innerText.toLowerCase() : 'pt-br';
  const langKey = currentLang.includes('pt-pt') ? 'pt-pt' : (currentLang.includes('en-us') ? 'en-us' : 'pt-br');
  
  if (answer !== captchaValues[prefix]) {
    alert(translations[langKey]['captcha-err']);
    generateCaptcha(tipo.toLowerCase());
    return;
  }
  
  const data = new FormData(event.target);
  const org = data.get('empresa') || data.get('hospital') || "Não preenchido";
  const body = `Nome: ${data.get('nome')}\nEmail: ${data.get('email')}\nTelefone: ${data.get('telefone')}\nOrg: ${org}\nMensagem: ${data.get('mensagem')}`;
  window.location.href = `mailto:contato@medaffection.com?subject=Novo Contato SITE: ${tipo}&body=${encodeURIComponent(body)}`;
  generateCaptcha(tipo.toLowerCase());
};

window.copyPixKey = function() {
  const pixKey = "52.911.460/0001-75";
  navigator.clipboard.writeText(pixKey).then(() => {
    const btn = document.querySelector('[onclick="copyPixKey()"].w-full');
    const icon = btn.querySelector('.ph-check-circle');
    const originalText = btn.getAttribute('data-i18n-btn') ? translations[document.getElementById('current-lang-text').innerText.toLowerCase().includes('en') ? 'en-us' : 'pt-br']['supp-pix-btn'] : btn.innerText;
    
    if(icon) icon.classList.replace('opacity-0', 'opacity-100');
    btn.innerText = "Copiado!";
    btn.appendChild(icon);

    setTimeout(() => {
      if(icon) icon.classList.replace('opacity-100', 'opacity-0');
      btn.innerText = originalText;
      btn.appendChild(icon);
    }, 2000);
  });
};

window.copyPronac = function() {
  const pronac = "260346";
  navigator.clipboard.writeText(pronac).then(() => {
    const btn = document.querySelector('[onclick="copyPronac()"]');
    const icon = btn.querySelector('.ph-check');
    const originalIconClass = 'ph-copy';
    
    if(icon) {
      icon.classList.replace('ph-copy', 'ph-check');
      icon.classList.add('text-brand-green');
    }
    
    setTimeout(() => {
      if(icon) {
        icon.classList.replace('ph-check', 'ph-copy');
        icon.classList.remove('text-brand-green');
      }
    }, 2000);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('pt-br');
  generateCaptcha('investidor');
  generateCaptcha('hospital');

  const tracks = document.querySelectorAll('[data-carousel-track]');
  tracks.forEach(track => {
    let index = 0;
    const items = track.children;
    const total = items.length;
    if(total <= 1) return;
    const prevBtn = track.parentElement.parentElement.querySelector('[data-carousel-prev]');
    const nextBtn = track.parentElement.parentElement.querySelector('[data-carousel-next]');
    
    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }
    
    if(nextBtn) nextBtn.addEventListener('click', () => { index = (index + 1) % total; updateCarousel(); });
    if(prevBtn) prevBtn.addEventListener('click', () => { index = (index - 1 + total) % total; updateCarousel(); });
    setInterval(() => { index = (index + 1) % total; updateCarousel(); }, 5000);
  });
  
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  
  if(menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if(menuIcon) {
        if(isHidden) {
          menuIcon.classList.replace('ph-x', 'ph-list');
        } else {
          menuIcon.classList.replace('ph-list', 'ph-x');
        }
      }
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if(menuIcon) menuIcon.classList.replace('ph-x', 'ph-list');
      });
    });
  }

  const setHeaderState = () => {
    const h = document.getElementById('header-inner');
    if (!h) return;
    if (window.scrollY > 50) {
      h.classList.add('bg-white/95', 'shadow-lg', 'py-3');
      h.classList.remove('bg-white/70', 'py-4', 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]');
    } else {
      h.classList.remove('bg-white/95', 'shadow-lg', 'py-3');
      h.classList.add('bg-white/70', 'py-4', 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]');
    }
  };
  window.addEventListener('scroll', setHeaderState);
  setHeaderState();

  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
  const observer = new IntersectionObserver((entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
        ob.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
    observer.observe(section);
  });
});
