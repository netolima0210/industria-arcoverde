-- Criação da tabela de Dicas e Destaques
create table public.dicas_destaques (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  titulo text not null,
  conteudo text not null,
  imagem_url text null,
  ativo boolean not null default true,
  constraint dicas_destaques_pkey primary key (id)
);

-- Habilitar Row Level Security (RLS)
alter table public.dicas_destaques enable row level security;

-- Criar política de leitura pública (todos podem ver dicas ativas)
create policy "Dicas são visíveis publicamente"
on public.dicas_destaques
for select
to public
using (ativo = true);

-- Inserir dados de exemplo (opcional, para testar)
insert into public.dicas_destaques (titulo, conteudo, ativo)
values
  ('Bem-vindo à Indústria Arcoverde', 'Estamos felizes em lançar nosso novo site com todos os produtos da Linha Riso.', true),
  ('Dicas de Limpeza Sustentável', 'Saiba como usar nossos produtos para uma limpeza eficiente e amigável ao meio ambiente.', true),
  ('Novos Lançamentos', 'Confira a nova linha de desinfetantes e pastilhas sanitárias.', true);
